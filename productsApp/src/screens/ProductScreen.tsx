import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ProductsStackParams } from '../navigators/ProductsNavigator'
import { Picker } from '@react-native-picker/picker';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { };

export const ProductScreen = ({ navigation, route }: Props) => {

    const { id = '', name = '' } = route.params;

    useEffect(() => {
        loadProduct();
    }, [])

    const [tempPhotoUri, setTempPhotoUri] = useState<string>()

    const { categories } = useCategories();

    const { loadProductById, addProduct, updateProduct, uploadImage } = useContext(ProductsContext);

    const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: ''
    });

    useEffect(() => {
        navigation.setOptions({
            title: (nombre) ? nombre : 'No name'
        })
    }, [nombre])

    const loadProduct = async () => {

        if (id.length === 0) return;

        const product = await loadProductById(id);

        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre
        })
    }

    const addOrUpdateProduct = async () => {
        if (id.length > 0) {
            await updateProduct(categoriaId, nombre, id);
            navigation.navigate('ProductsScreen')
        }
        else {
            const defaulCategory = categoriaId || categories[0]._id;
            await addProduct(defaulCategory, nombre);
            navigation.navigate('ProductsScreen')
        }
    }

    const takePhotoWithCamera = () => {
        launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, (response) => {

            if (response.didCancel) return;
            const uri = response?.assets && response.assets[0].uri;
            setTempPhotoUri(uri);
            console.log(id)
            uploadImage(response, id);
        });
    }

    const chooseImageFromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5
        }, (response) => {

            if (response.didCancel) return;
            const uri = response?.assets && response.assets[0].uri;
            console.log(response)
            setTempPhotoUri(uri);
            uploadImage(response, id);
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>

                <Text style={styles.label}>
                    Product name
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='Product'
                    value={nombre}
                    onChangeText={(value) => onChange(value, 'nombre')}
                />

                <Text style={styles.label}>
                    Category
                </Text>

                <Picker
                    selectedValue={categoriaId}
                    onValueChange={(selectedValue) =>
                        onChange(selectedValue, 'categoriaId')
                    }
                >
                    {
                        categories.map(c =>
                        (<Picker.Item
                            label={c.nombre}
                            value={c._id}
                            key={c._id}
                        />))
                    }
                </Picker>

                <View style={{
                    marginTop: 20
                }}
                />

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button
                        title='Save Changes'
                        onPress={addOrUpdateProduct}
                        color="#5856D6"
                    />

                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 10,
                }}>

                    <Button
                        title='Camera'
                        onPress={takePhotoWithCamera}
                        color="#5856D6"
                        disabled={id.length == 0}
                    />

                    <View
                        style={{ width: 10 }}
                    />

                    <Button
                        title='Galery'
                        onPress={chooseImageFromGallery}
                        color="#5856D6"
                        disabled={id.length == 0}
                    />

                </View>


                {
                    (img.length > 0 && !tempPhotoUri) && (
                        <Image
                            source={{ uri: img }}
                            style={{
                                width: 200,
                                height: 200,
                                marginTop: 30,
                                marginLeft: 85,

                            }}
                        />
                    )
                }

                {
                    (tempPhotoUri) && (
                        <Image
                            source={{ uri: tempPhotoUri }}
                            style={{
                                width: 200,
                                height: 200,
                                marginTop: 30,
                                marginLeft: 85,

                            }}
                        />
                    )
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
    },

    label: {
        fontSize: 16,
        marginTop: 5,
        color: 'black'
    },

    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        borderColor: 'rgba(0,0,0,0.5)',
        marginTop: 5,
        marginBottom: 10
    }
})
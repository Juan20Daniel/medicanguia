import { View, Image, Text } from 'react-native';
import { ids, styles } from './headerStyles';
import { A } from '@expo/html-elements';
const HeaderApp = ({ colorScheme }) => {
    return (
        <View style={styles.header} dataSet={{ media:ids.header }}>
            <View style={styles.boxHeader}>
                <Image 
                    source={require('../../assets/imgBackHeader.jpg')} 
                    resizeMode='cover' 
                    style={styles.imgBackHeader}
                />
                <View style={styles.boxTitle} dataSet={{media:ids.boxTitle}}>
                    <Text style={styles.title} dataSet={{ media:ids.title }}>ANUNCIATE CON NOSOTROS</Text>
                </View>
                <View 
                    style={{...styles.boxWe, backgroundColor:colorScheme==='dark' ? "#454444" : "#fff"}} 
                    dataSet={{ media:ids.boxWe}}
                >
                    <View style={styles.we}>
                        <Text style={styles.nameApp} dataSet={{ media:ids.nameApp }}>
                            Guía médica <Text style={styles.spanNameApp}>Manzanillo</Text>
                        </Text>
                        <View 
                            style={styles.quality} 
                            dataSet={{media:ids.quality}}
                        >
                            <Image 
                                source={require('../../assets/star.png')} 
                                style={styles.star}
                                dataSet={{media: ids.star}}
                            />
                            <Image 
                                source={require('../../assets/star.png')} 
                                style={styles.star}
                                dataSet={{media: ids.star}}
                            />
                            <Image 
                                source={require('../../assets/star.png')} 
                                style={styles.star}
                                dataSet={{media: ids.star}}
                            />
                            <Image 
                                source={require('../../assets/star.png')} 
                                style={styles.star}
                                dataSet={{media: ids.star}}
                            />
                            <Image 
                                source={require('../../assets/star.png')} 
                                style={styles.star}
                                dataSet={{media: ids.star}}
                            />
                            <View style={styles.point} dataSet={{media:ids.point}}></View>
                            <Text style={styles.textQuality} dataSet={{media:ids.textQuality}}>
                                Publicidad de calidad
                            </Text>
                        </View>
                        <View style={styles.boxNetworks} dataSet={{media:ids.boxNetworks}}>
                            <View style={styles.networks}>
                                <View style={styles.boxIconNetwork} dataSet={{media:ids.boxIconNetwork}}>
                                    <Image 
                                        source={require('../../assets/iconFacebook.png')} 
                                        style={styles.iconsNetwork}
                                        dataSet={{media:ids.iconsNetwork}}
                                    />
                                    <Text style={styles.nameNetwork} dataSet={{media:ids.nameNetwork}}>
                                        <A href="https://www.facebook.com/">Facebook</A>
                                    </Text>
                                </View>
                                <View style={styles.boxIconNetwork} dataSet={{media:ids.boxIconNetwork}}>
                                    <Image 
                                        source={require('../../assets/iconInstagram.png')} 
                                        style={styles.iconsNetwork}
                                        dataSet={{media:ids.iconsNetwork}}
                                    />
                                    <Text style={styles.nameNetwork} dataSet={{media:ids.nameNetwork}}>
                                        <A href='https://www.instagram.com/'>Instagram</A>
                                    </Text>
                                </View>
                                <View style={styles.boxIconNetwork} dataSet={{media:ids.boxIconNetwork}}>
                                    <Image 
                                        source={require('../../assets/iconWhatsapp.png')} 
                                        style={styles.iconsNetwork}
                                        dataSet={{media:ids.iconsNetwork}}
                                    />
                                    <Text style={styles.nameNetwork} dataSet={{media:ids.nameNetwork}}>
                                        <A href='https://wa.link/bbjsr8'>Whatsapp</A>
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Image 
                            style={styles.staidHeader}
                            source={require('../../assets/staidHeader.png')} 
                            resizeMode="cover"
                            dataSet={{media:ids.staidHeader}}
                        />
                    </View>
                </View>
            </View>
      </View>
    );
}
export default HeaderApp;
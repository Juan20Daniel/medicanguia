import { View, Image, Text, Dimensions } from 'react-native';
import { ids, styles } from './headerStyles';
import HrefHeader from '../hrefHeader/HrefHeader';
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
                                <HrefHeader 
                                    href="https://www.facebook.com/"
                                    icon={require('../../assets/iconFacebook.png')}
                                    name="Facebook"
                                />
                                <HrefHeader 
                                    href="https://www.instagram.com/"
                                    icon={require('../../assets/iconInstagram.png')}
                                    name="Instagram"
                                />
                                <HrefHeader 
                                    href="https://wa.link/bbjsr8"
                                    icon={require('../../assets/iconWhatsapp.png')}
                                    name="Whatsapp"
                                />
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
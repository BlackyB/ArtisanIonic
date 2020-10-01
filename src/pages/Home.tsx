import React from 'react';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow, IonSlide, IonSlides,
    IonText,
} from '@ionic/react';
import PageTitle from "../components/PageTitle";
import './Home.css';
import {requestAPI} from "../API/API";

const Home: React.FC = () => {

    const slideOptsOne = {
        initialSlide: 0,
        slidesPerView: 1,
        autoplay:true,
        loop: true,
        grabCursor: true
    };

    const handleClick = () => {
        requestAPI("GET", "USER", 1)
    }


    // get()
    // console.log(get())
    // console.log(get('ADS'))
    // console.log(get('LOGIN', 2))
    // console.log(get('ADS', 10, [{key: "age", value: "12"}, {key: "size", value: "180cm"}] ))

    return (
        <IonPage className={"opacity"}>
            <PageTitle pageTitle={"Accueil"}/>
            <IonContent>
                <IonButton onClick={handleClick}>GET</IonButton>
                <IonGrid className="ion-no-padding">

                    <IonRow className="ion-padding-vertical">
                        <IonCol size="12" size-md="6">
                            <IonCard button href="/recherche/artisan" className="hover-title">
                                <IonRow>
                                    <IonCol size="12" size-md="4" className="img-container">
                                        <img
                                            src="https://www.weldom.fr/media/wysiwyg/article/191218-cadeaux-01.jpg"
                                            alt=""
                                        />
                                    </IonCol>
                                    <IonCol size="12" size-md="8" className="bg-tertiary">
                                        <IonCardHeader className="ion-no-padding">
                                            <IonCardTitle className="ion-margin ion-padding">
                                                Je suis un particulier
                                            </IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent className="ion-padding ion-margin">
                                            <IonText>
                                                Si vous avez besoin d'un artisan, vous êtes au bon endroit.
                                                Artisan & Moi vous permet d'être mis en relation avec des artisants au
                                                plus prés
                                                de chez vous afin de réaliser tous vos projets.
                                            </IonText>
                                        </IonCardContent>
                                    </IonCol>

                                </IonRow>
                            </IonCard>
                        </IonCol>

                        <IonCol size="12" size-md="6">
                            <IonCard button href="/recherche/annonce" className="hover-title">
                                <IonRow>
                                    <IonCol size="12" size-md="8" className="bg-primary">
                                        <IonCardHeader className="ion-no-padding">
                                            <IonCardTitle className="ion-margin ion-padding ion-text-right">
                                                Je suis un artisan
                                            </IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent className="ion-padding ion-margin ion-text-right">
                                            <IonText>
                                                Si vous êtes à la recherche de nouveaux projets vous êtes au bon
                                                endroit.
                                                "Artisan&Moi" vous permet d'être mis en relation avec des particuliers
                                                au plus
                                                prés
                                                de chez vous.
                                            </IonText>
                                        </IonCardContent>
                                    </IonCol>
                                    <IonCol size="12" size-md="4" className="img-container">
                                        <img
                                            src="https://www.projets-et-travaux.fr/wp-content/uploads/2019/11/trouver-un-artisan-electricien.jpg"
                                            alt=""
                                        />
                                    </IonCol>
                                </IonRow>
                            </IonCard>


                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonRow className="ion-text-center">
                                <IonCol size="12" size-md="4">
                                    <img className="icon-medium"
                                         src="https://www.trouverunartisan.fr/images/icon1.png"
                                         alt=""
                                    />
                                    <h4>Facilité de mise en relation avec les artisans</h4>
                                </IonCol>
                                <IonCol size="12" size-md="4">
                                    <img className="icon-medium"
                                         src="https://www.trouverunartisan.fr/images/icon2.png"
                                         alt=""
                                    />
                                    <h4>Réponses rapide à vos demandes de devis</h4>
                                </IonCol>
                                <IonCol size="12" size-md="4">
                                    <img className="icon-medium"
                                         src="https://www.trouverunartisan.fr/images/icon3.png"
                                         alt=""
                                    />
                                    <h4>Un système d'évaluations et de gallerie</h4>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonSlides pager={true} options={slideOptsOne}>
                            <IonSlide>
                                <IonRow>
                                    <IonCol className="bg-tertiary ion-padding" size-md="7" size="12">
                                        In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae
                                        suapte natura
                                        calentes emergunt ad usus aptae multiplicium medelarum. verum has quoque
                                        regiones pari sorte
                                        Pompeius Iudaeis domitis et Hierosolymis captis in provinciae speciem delata
                                        iuris dictione
                                        formavit.
                                    </IonCol>
                                    <IonCol className="img-container" size-md="5" size="12">
                                        <img
                                            src="https://picsum.photos/id/242/800/300"
                                            alt=""
                                        />
                                    </IonCol>
                                </IonRow>
                            </IonSlide>
                            <IonSlide>
                                <IonRow>
                                    <IonCol className="img-container" size-md="5" size="12">
                                        <img
                                            src="https://picsum.photos/id/243/800/300"
                                            alt=""
                                        />
                                    </IonCol>
                                    <IonCol className="bg-tertiary ion-padding" size-md="7" size="12">
                                        Montius nos tumore inusitato quodam et novo ut rebellis et maiestati
                                        recalcitrantes Augustae
                                        per haec quae strepit incusat iratus nimirum quod contumacem praefectum, quid
                                        rerum ordo
                                        postulat ignorare dissimulantem formidine tenus iusserim custodiri.
                                    </IonCol>
                                </IonRow>
                            </IonSlide>
                            <IonSlide>
                                <IonRow>
                                    <IonCol className="bg-tertiary ion-padding" size-md="7" size="12">
                                        Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem
                                        Aginatium
                                        inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama.
                                        nec enim super
                                        hoc ulla documentorum rata est fides.
                                        Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non
                                        properat, ut
                                        omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud
                                        vellet, rei
                                        publicae consulere oporteret?
                                    </IonCol>
                                    <IonCol className="img-container" size-md="5" size="12">
                                        <img
                                            src="https://picsum.photos/id/238/800/300"
                                            alt=""
                                        />
                                    </IonCol>
                                </IonRow>
                            </IonSlide>
                            <IonSlide>
                                <IonRow>
                                    <IonCol className="img-container" size-md="5" size="12">
                                        <img
                                            src="https://picsum.photos/id/239/800/300"
                                            alt=""
                                        />
                                    </IonCol>
                                    <IonCol className="bg-tertiary ion-padding" size-md="7" size="12">
                                        Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais,
                                        sapientissimum
                                        iudicavit;
                                    </IonCol>
                                </IonRow>
                            </IonSlide>
                        </IonSlides>
                    </IonRow>

                    <IonRow>
                        <IonCol className="bg-primary ion-padding" size-md="2" size="12">
                            In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura
                            calentes emergunt ad usus aptae multiplicium medelarum. verum has quoque regiones pari sorte
                            Pompeius Iudaeis domitis et Hierosolymis captis in provinciae speciem delata iuris dictione
                            formavit.
                        </IonCol>
                        <IonCol className="img-container" size-md="5" size="12">
                            <img
                                src="https://sf2.viepratique.fr/wp-content/uploads/sites/8/2017/10/une-artisan-1.jpg"
                                alt=""
                            />
                        </IonCol>
                        <IonCol className="bg-tertiary ion-padding" size-md="2" size="12">
                            Montius nos tumore inusitato quodam et novo ut rebellis et maiestati recalcitrantes Augustae
                            per haec quae strepit incusat iratus nimirum quod contumacem praefectum, quid rerum ordo
                            postulat ignorare dissimulantem formidine tenus iusserim custodiri.
                        </IonCol>
                        <IonCol className="img-container" size-md="3" size="12">
                            <img
                                src="https://medias-catholique.info/wp-content/uploads/2019/03/Artisan-1024x480-640x360.jpg"
                                alt=""
                            />
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="bg-tertiary ion-padding" size-md="3" size="12">
                            Oportunum est, ut arbitror, explanare nunc causam, quae ad exitium praecipitem Aginatium
                            inpulit iam inde a priscis maioribus nobilem, ut locuta est pertinacior fama. nec enim super
                            hoc ulla documentorum rata est fides.
                            Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non properat, ut
                            omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud vellet, rei
                            publicae consulere oporteret?
                        </IonCol>
                        <IonCol className="img-container" size-md="2" size="12">
                            <img
                                src="https://www.guide-artisan-alsace.fr/img/actualites/faire-appel-a-un-plombier-pour-raccorder-sa-maison-au-reseau-deau.jpg"
                                alt=""
                            />
                        </IonCol>
                        <IonCol className="bg-secondary ion-padding" size-md="2" size="12">
                            Quam ob rem cave Catoni anteponas ne istum quidem ipsum, quem Apollo, ut ais, sapientissimum
                            iudicavit;
                        </IonCol>
                        <IonCol className="img-container" size-md="3" size="12">
                            <img
                                src="https://www.lemagdelimmobilier.com/images/dossiers/2019-09/artisan-083244.jpg"
                                alt=""
                            />
                        </IonCol>
                        <IonCol className="bg-primary ion-padding" size-md="2" size="12">
                            Ut enim benefici liberalesque sumus, non ut exigamus gratiam (neque enim beneficium
                            faeneramur sed natura propensi ad liberalitatem sumus), sic amicitiam non spe mercedis
                            adducti sed quod omnis eius fructus in ipso amore inest, expetendam putamus.
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="12">
                            <IonRow className="ion-text-center ion-full-row ion-padding-vertical">
                                <IonCol size="12">
                                    <IonSlides>
                                        <IonSlide>
                                            <IonCol>
                                                <h4>"Je tiens à vous dire toute ma satisfaction quant à votre site
                                                    internet"</h4>
                                                <p>Mme Martin</p>
                                            </IonCol>
                                        </IonSlide>
                                        <IonSlide>
                                            <IonCol>
                                                <h4>"J'ai trouvé un artisan plombier dans les 24h pour installer ma
                                                    nouvelle douche, super"</h4>
                                                <p>Mr Simon</p>
                                            </IonCol>
                                        </IonSlide>
                                        <IonSlide>
                                            <IonCol>
                                                <h4>"Sans ce site je n'aurai jamais pu trouver Mr Armand qui a refait ma
                                                    toiture</h4>
                                                <p>Mme Vincelli</p>
                                            </IonCol>
                                        </IonSlide>
                                    </IonSlides>

                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Home;

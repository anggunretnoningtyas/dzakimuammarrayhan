var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> BANJARMARGO<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> GEDUNGAJI BARU<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> GUNUNGAGUNG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> MESUJI<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> MESUJI TIMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> MESUJIMAKMUR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> PANCAJAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> PENAWARTAMA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> RAWAJITU SELATAN<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> RAWAJITU UTARA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> SIMPANGPEMATANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> SUNGAIMENANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> TANJUNGRAYA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> WAYKENANGA<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> WAYSERDANG<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> <br />'
        });
var format_JALAN_LN_50K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_2 = format_JALAN_LN_50K_2.readFeatures(json_JALAN_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_2.addFeatures(features_JALAN_LN_50K_2);
var lyr_JALAN_LN_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_2, 
                style: style_JALAN_LN_50K_2,
                interactive: true,
    title: 'JALAN_LN_50K<br />\
    <img src="styles/legend/JALAN_LN_50K_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_50K_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_50K_2_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_50K_2_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_50K_2_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/JALAN_LN_50K_2_5.png" /> <br />'
        });
var format_SUNGAI_AR_50K_3 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_3 = format_SUNGAI_AR_50K_3.readFeatures(json_SUNGAI_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_3.addFeatures(features_SUNGAI_AR_50K_3);
var lyr_SUNGAI_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_AR_50K_3, 
                style: style_SUNGAI_AR_50K_3,
                interactive: true,
    title: 'SUNGAI_AR_50K<br />\
    <img src="styles/legend/SUNGAI_AR_50K_3_0.png" /> Sungai<br />\
    <img src="styles/legend/SUNGAI_AR_50K_3_1.png" /> <br />'
        });
var format_PEMERINTAHAN_PT_50K_4 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_4 = format_PEMERINTAHAN_PT_50K_4.readFeatures(json_PEMERINTAHAN_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_4.addFeatures(features_PEMERINTAHAN_PT_50K_4);
var lyr_PEMERINTAHAN_PT_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_4, 
                style: style_PEMERINTAHAN_PT_50K_4,
                interactive: true,
    title: 'PEMERINTAHAN_PT_50K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_0.png" /> Bangunan/Kantor Pertahanan Keamanan Lainnya<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_1.png" /> Kantor Bupati<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_2.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_3.png" /> Kantor DPRD<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_4.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_5.png" /> Kantor Pemerintah Lainnya<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_6.png" /> Kantor Polisi<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_50K_4_7.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_JALAN_LN_50K_2.setVisible(true);lyr_SUNGAI_AR_50K_3.setVisible(true);lyr_PEMERINTAHAN_PT_50K_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_JALAN_LN_50K_2,lyr_SUNGAI_AR_50K_3,lyr_PEMERINTAHAN_PT_50K_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JALAN_LN_50K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JALAN_LN_50K_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_AR_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_JALAN_LN_50K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_50K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
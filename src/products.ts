import UHomeAll from '@/assets/ucan-power_UHome.png';
import UHB50 from '@/assets/ucan-power_UHB.png';
import UHome_invertor from '@/assets/ucan-power_invertorUHome.png';
import UHC from '@/assets/ucan-power_UHC.png';
import UHome_battery from '@/assets/ucan-power_battery.png'
import UHB_battery from '@/assets/ucan-power_mainacc.png';
import UHB_smallbattery from '@/assets/ucan-power_smallbattery.png';
import UHome_base from '@/assets/ucan-power_base1.png';
import UHB_base from '@/assets/ucan-power_base2.png';


export const products = {
    ready_solutions: [
        {
            "name": "UHome All in One ESS",
            "searchTag": "UHome-All-in-One-ESS",
            "description": "Система низьковольтної батареї",
            "image": UHomeAll,
            "advantages": [
                "Проста установка завдяки модульній і багатошаровій конструкції",
                "Гнучке розширення ємності батареї, 5~40 кВт/год",
                "Моніторинг у реальному часі та контроль параметрів через додаток UCANESS",
                "Ступінь захисту IP 65, можливість встановлення всередині та на вулиці"
            ]
        },
        {
            "name": "UHB 50Ah",
            "searchTag": "UHB-50Ah",
            "description": "Система високовольтної батареї",
            "image": UHB50,
            "advantages": [
                "Проста установка завдяки модульній і багатошаровій конструкції",
                "Гнучке розширення ємності батареї від 7,68 кВт-год до 25,6 кВт-год",
                "Віддалена діагностика та моніторинг даних у реальному часі",
                "Оригінальна технологія активного балансу батареї"
            ]
        }
    ],
    modules: [
        {
            "name": "UHome-5K0L",
            "searchTag": "UHome-5K0L",
            "description": "5kW,  Однофазний Гібридний інвертор",
            "image": UHome_invertor,
            "price": "49 000 ₴",
            "tag": "UHome",
            "type": "Інвертор",
            "characteristics": {
                "Номінальна напруга акумулятора": "51.2V",
                "Макс. Потужність зарядки": "5000W",
                "Макс. струм заряду/розряду": "100/100A",
                "Макс. вхідна потужність": "7500W",
                "Макс. PV напруга": "550V",
                "Пускова напруга": "100V",
                "Номінальна напруга постійного струму": "360V",
                "Діапазон напруг MPPT": "80~500V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "1/1 ",
                "Максимальний вхідний струм": "14/14A",
                "Номінальна вихідна потужність для роботи в мережі та поза мережою": "5000W",
                "Номінальний вихідний струм": "21.7A",
                "Макс. вихідний струм ": "21.7A",
                "Номінальна вихідна напруга": "L/N/PE, 220V, 230V",
                "Номінальна частота": "50/60Hz",
                "Коефіцієнт гармонік,%": "THDv ＜3%",
                "Здатність до перевантажень": "110%,60s/120%,30s/150%,10s",
                "Час переключення": "<20ms",
                "Топологія інвертора": "Неізольований",
                "Макс. ефективність": "97.6%",
                "Євро ефективність": "97.0%",
                "Макс. ефективність заряду/розряду акумулятора": "95.0%",
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "675*200*415",
                "Вага": "34кг"
            }
        },
        {
            "name": "UHome-6K0L",
            "searchTag": "UHome-6K0L",
            "description": "6kW,  Однофазний Гібридний інвертор",
            "image": UHome_invertor,
            "price": "50 000 ₴",
            "tag": "UHome",
            "type": "Інвертор",
            "characteristics": {
                "Номінальна напруга акумулятора": "51.2V",
                "Макс. Потужність зарядки": "6000W",
                "Макс. струм заряду/розряду": "120/120A",
                "Макс. вхідна потужність": "9000W",
                "Макс. PV напруга": "550V",
                "Пускова напруга": "100V",
                "Номінальна напруга постійного струму": "360V",
                "Діапазон напруг MPPT": "80~500V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "1/1 ",
                "Максимальний вхідний струм": "14/14A",
                "Номінальна вихідна потужність для роботи в мережі та поза мережою": "6000W",
                "Номінальний вихідний струм": "26A",
                "Макс. вихідний струм ": "26A",
                "Номінальна вихідна напруга": "L/N/PE, 220V, 230V",
                "Номінальна частота": "50/60Hz",
                "Коефіцієнт гармонік,% THDv": "＜3%",
                "Здатність до перевантажень": "110%,60s/120%,30s/150%,10s",
                "Час переключення": "<20ms",
                "Топологія інвертора": "Неізольований",
                "Макс. ефективність": "97.6%",
                "Євро ефективність": "97.0%",
                "Макс. ефективність заряду/розряду акумулятора": "95.0%",
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "675*200*415",
                "Вага": "34кг"
            }
        },
        {
            "name": "UHome-8K0L",
            "searchTag": "UHome-8K0L",
            "description": "8kW,  Однофазний Гібридний інвертор",
            "image": UHome_invertor,
            "price": "58 000 ₴",
            "tag": "UHome",
            "type": "Інвертор",
            "characteristics": {
                "Номінальна напруга акумулятора": "51.2V",
                "Макс. Потужність зарядки": "8000W",
                "Макс. струм заряду/розряду": "160/160A",
                "Макс. вхідна потужність": "12000W",
                "Макс. PV напруга": "550V",
                "Пускова напруга": "100V",
                "Номінальна напруга постійного струму": "360V",
                "Діапазон напруг MPPT": "80~500V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "1/1 ",
                "Максимальний вхідний струм": "14/28A",
                "Номінальна вихідна потужність для роботи в мережі та поза мережою": "8000W",
                "Номінальний вихідний струм": "35A",
                "Макс. вихідний струм ": "35A",
                "Номінальна вихідна напруга": "L/N/PE, 220V, 230V",
                "Номінальна частота": "50/60Hz",
                "Коефіцієнт гармонік,% THDv": "＜3%",
                "Здатність до перевантажень": "110%,60s/120%,30s/150%,10s",
                "Час переключення": "<20ms",
                "Топологія інвертора": "Неізольований",
                "Макс. ефективність": "97.6%",
                "Євро ефективність": "97.0%",
                "Макс. ефективність заряду/розряду акумулятора": "95.0%",
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "675*200*415",
                "Вага": "34кг"
            }
        },
        {
            "name": "UHC-10KT",
            "searchTag": "UHC-10KT",
            "description": "10kW,  Трьохфазний Гібридний інвертор",
            "image": UHC,
            "price": "74 000 ₴",
            "tag": "UHС",
            "type": "Інвертор",
            "characteristics": {
                "Макс. PV потужність": "15000W",
                "Макс. Напруга постійного струму": "1000V",
                "Пускова напруга": "135V",
                "Діапазон напруг MPPT": "200~950V",
                "Номінальна напруга постійного струму": "620V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "1/1",
                "Макс. вхідний струм": "15A/15A",
                "Макс. короткий струм": "20A/20A",
                "Номінальна потужність змінного струму": "10000W",
                "Макс. Вихідна потужність змінного струму в мережу": "11000VA",
                "Макс. Живлення змінного струму від мережі": "16500VA",
                "Макс. Вихід змінного струму в мережу": "16.5A",
                "Макс. Змінний струм від мережі": "23.9A",
                "Номінальна напруга мережі" : "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Діапазон напруги мережі": "184V~276V",
                "Номінальна частота мережі": "50/60Hz",
                "Коефіцієнт вихідної потужності": "~1(0.8 leading to 0.8 lagging)",
                "Вихідний коефіцієнт THDi (@номінальний вихід)": "<3%",
                "Номінальна вихідна потужність": "10000W",
                "Макс. вихідна потужність": "11000VA",
                "Пікова вихідна потужність, Тривалість": "16500VA, 60s",
                "Макс. вихідний струм": "16.5A",
                "Номінальна вихідна напруга": "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Номінальна вихідна частота": "50/60Hz",
                "Вихідний THDv (@Liner навантаження)": "<3%",
                "Час переключення": "<10ms",
                "Макс. ефективність": "98.2%",
                "Євро ефективність": "97.4%",
                "Топологія інвертора": "Неізольований"
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "550*435*210",
                "Вага": "26кг"
            }
        },
        {
            "name": "UHC-12KT",
            "searchTag": "UHC-12KT",
            "description": "12kW,  Трьохфазний Гібридний інвертор",
            "image": UHC,
            "price": "77 000 ₴",
            "tag": "UHС",
            "type": "Інвертор",
            "characteristics": {
                "Макс. PV потужність": "18000W",
                "Макс. Напруга постійного струму": "1000V",
                "Пускова напруга": "135V",
                "Діапазон напруг MPPT": "200~950V",
                "Номінальна напруга постійного струму": "620V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "1/1",
                "Макс. вхідний струм": "15A/15A",
                "Макс. короткий струм": "20A/20A",
                "Номінальна потужність змінного струму": "12000W",
                "Макс. Вихідна потужність змінного струму в мережу": "13200VA",
                "Макс. Живлення змінного струму від мережі": "16500VA",
                "Макс. Вихід змінного струму в мережу": "20A",
                "Макс. Змінний струм від мережі": "23.9A",
                "Номінальна напруга мережі" : "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Діапазон напруги мережі": "184V~276V",
                "Номінальна частота мережі": "50/60Hz",
                "Коефіцієнт вихідної потужності": "~1(0.8 leading to 0.8 lagging)",
                "Вихідний коефіцієнт THDi (@номінальний вихід)": "<3%",
                "Номінальна вихідна потужність": "12000W",
                "Макс. вихідна потужність": "13200VA",
                "Пікова вихідна потужність, Тривалість": "16500VA, 60s",
                "Макс. вихідний струм": "20A",
                "Номінальна вихідна напруга": "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Номінальна вихідна частота": "50/60Hz",
                "Вихідний THDv (@Liner навантаження)": "<3%",
                "Час переключення": "<10ms",
                "Макс. ефективність": "98.2%",
                "Євро ефективність": "97.4%",
                "Топологія інвертора": "Неізольований"
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "550*435*210",
                "Вага": "26кг"
            }
        },
        {
            "name": "UHC-15KT",
            "searchTag": "UHC-15KT",
            "description": "15kW,  Трьохфазний Гібридний інвертор",
            "image": UHC,
            "price": "107 000 ₴",
            "tag": "UHС",
            "type": "Інвертор",
            "characteristics": {
                "Макс. PV потужність": "22500W",
                "Макс. Напруга постійного струму": "1000V",
                "Пускова напруга": "135V",
                "Діапазон напруг MPPT": "200~950V",
                "Номінальна напруга постійного струму": "620V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "2/2",
                "Макс. вхідний струм": "30A/30A",
                "Макс. короткий струм": "40A/40A",
                "Номінальна потужність змінного струму": "15000W",
                "Макс. Вихідна потужність змінного струму в мережу": "16500VA",
                "Макс. Живлення змінного струму від мережі": "30000VA",
                "Макс. Вихід змінного струму в мережу": "25A",
                "Макс. Змінний струм від мережі": "43.5A",
                "Номінальна напруга мережі" : "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Діапазон напруги мережі": "184V~276V",
                "Номінальна частота мережі": "50/60Hz",
                "Коефіцієнт вихідної потужності": "~1(0.8 leading to 0.8 lagging)",
                "Вихідний коефіцієнт THDi (@номінальний вихід)": "<3%",
                "Номінальна вихідна потужність": "15000W",
                "Макс. вихідна потужність": "16500VA",
                "Пікова вихідна потужність, Тривалість": "25000VA, 60s",
                "Макс. вихідний струм": "25A",
                "Номінальна вихідна напруга": "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Номінальна вихідна частота": "50/60Hz",
                "Вихідний THDv (@Liner навантаження)": "<3%",
                "Час переключення": "<10ms",
                "Макс. ефективність": "98.4%",
                "Євро ефективність": "97.5%",
                "Топологія інвертора": "Неізольований"
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "550*435*210",
                "Вага": "31кг"
            }
        },
        {
            "name": "UHC-20KT",
            "searchTag": "UHC-20KT",
            "description": "20kW,  Трьохфазний Гібридний інвертор",
            "image": UHC,
            "price": "118 000 ₴",
            "tag": "UHС",
            "type": "Інвертор",
            "characteristics": {
                "Макс. PV потужність": "30000W",
                "Макс. Напруга постійного струму": "1000V",
                "Пускова напруга": "135V",
                "Діапазон напруг MPPT": "200~950V",
                "Номінальна напруга постійного струму": "620V",
                "Кількість трекерів MPP": "2",
                "Кількість рядків на трекер MPP": "2/2",
                "Макс. вхідний струм": "30A/30A",
                "Макс. короткий струм": "40A/40A",
                "Номінальна потужність змінного струму": "20000W",
                "Макс. Вихідна потужність змінного струму в мережу": "22000VA",
                "Макс. Живлення змінного струму від мережі": "30000VA",
                "Макс. Вихід змінного струму в мережу": "33.5A",
                "Макс. Змінний струм від мережі": "43.5A",
                "Номінальна напруга мережі" : "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Діапазон напруги мережі": "184V~276V",
                "Номінальна частота мережі": "50/60Hz",
                "Коефіцієнт вихідної потужності": "~1(0.8 leading to 0.8 lagging)",
                "Вихідний коефіцієнт THDi (@номінальний вихід)": "<3%",
                "Номінальна вихідна потужність": "20000W",
                "Макс. вихідна потужність": "22000VA",
                "Пікова вихідна потужність, Тривалість": "25000VA, 60s",
                "Макс. вихідний струм": "33.5A",
                "Номінальна вихідна напруга": "3/N/PE, 220/380V, 230/400V, 240/415V",
                "Номінальна вихідна частота": "50/60Hz",
                "Вихідний THDv (@Liner навантаження)": "<3%",
                "Час переключення": "<10ms",
                "Макс. ефективність": "98.4%",
                "Євро ефективність": "97.5%",
                "Топологія інвертора": "Неізольований"
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "550*435*210",
                "Вага": "31кг"
            }
        },
        {
            "name": "ULB-5120MT",
            "searchTag": "ULB-5120MT",
            "description": "51.2V/5.12kWh Модуль низьковольтної батареї",
            "image": UHome_battery,
            "price": "42 000 ₴",
            "tag": "UHome",
            "type": "Батарея",
            "characteristics": {
                "Тип батареї": "Li-ion (LFP)",
                "Номінальна напруга акумулятора": "51.2V",
                "Діапазон напруги акумулятора": "44.8~57.6V",
                "Ємність": "5.12kWh"
            },
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "675*200*620",
                "Вага": "70кг"
            }
        },
        {
            "name": "UHB2560M",
            "searchTag": "UHB2560M",
            "description": "2.56kWh Головний акумуляторний модуль + активний еквалайзер",
            "image": UHB_battery,
            "price": "40 000 ₴",
            "tag": "UHB",
            "type": "Батарея",
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "851*255*???",
                "Вага": "?кг"
            }
        },
        {
            "name": "UHB2560S",
            "searchTag": "UHB2560S",
            "description": "2.56kWh Модуль батареї + активний еквалайзер",
            "image": UHB_smallbattery,
            "price": "26 000 ₴",
            "tag": "UHB",
            "type": "Батарея",
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "851*255*130",
                "Вага": "32кг"
            }
        },
        {
            "name": "ULB-5120MT Base",
            "searchTag": "ULB-5120MT-Base",
            "description": "Підставка під модуль низьковольтної батареї ULB-5120MT",
            "image": UHome_base,
            "price": "2 500 ₴",
            "tag": "UHome",
            "type": "Підставка",
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "675*200*???",
                "Вага": "?кг"
            }
        },
        {
            "name": "UHB Base",
            "searchTag": "UHB-Base",
            "description": "Підставка під модуль батареї + активний еквалайзер UHB2560M та  UHB2560S",
            "image": UHB_base,
            "price": "2 500 ₴",
            "tag": "UHB",
            "type": "Підставка",
            "physicCharacteristics": {
                "Розмір, мм [Ш x Г x В]": "851*255*???",
                "Вага": "?кг"
            }
        }
    ]
}
export let productos = [
    {
        title: "Prusa i3", 
        price: 85000, 
        stock: 5, 
        description: "Es el tipo de impresora creado por Josef Prusa, es la más demandada en el mercado.", 
        category: "impresoras", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1687996930/prusai3_l9mfnf.webp"
    },

    {
        title: "Anet A8", 
        price: 60000, 
        stock: 5, 
        description: "De origen chino y de bajo costo, la mejor relación precio/calidad del mercado.", 
        category: "impresoras", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1687996930/aneta8_mvr057.jpg"
    },

    {
        title: "Creality Ender 3 Pro", 
        price: 90000, 
        stock: 4, 
        description: "Imprime tus objetos con una calidad asombrosa gracias a su precisión.", 
        category: "impresoras", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690407881/ender3pro_qil7oi.webp"
    },

    {
        title: "Creality CR5 Pro H FDM", 
        price: 150000, 
        stock: 2, 
        description: "Impresora completamente cerrada, resistente a altas temperaturas y gran variedad de materiales.", 
        category: "impresoras", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690407869/crealitycr5_wqkzwx.jpg"
    },

    {
        title: "Arduino Mega 2560", 
        price: 15000, 
        stock: 6, 
        description: "Placa Arduino que funciona como el cerebro de la impresora mediante código programado.", 
        category: "electrónica", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1688343866/arduinomega_h781ws.webp"
    },

    {
        title: "Arduino Uno", 
        price: 10000, 
        stock: 5, 
        description: "Alternativa a la Arduino Mega, es menos compleja por ende más limitada.", 
        category: "electrónica", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1687996930/arduinouno_wzw5up.png"
    },

    {
        title: "Ramps Shield 1.4", 
        price: 9000, 
        stock: 10, 
        description: "Shields para Arduino MEGA diseñadas para controlar motores paso a paso, generalmente NEMA,utilizando drivers POLOLU A4988 o DVR8825", 
        category: "electrónica", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408381/ramps1.4_ux4ybw.jpg"
    },

    {
        title: "Módulo CNC Shield", 
        price: 7000, 
        stock: 8, 
        description: "El modulo CNC shield para Arduino hace que sea fácil de construir sus proyectos CNC. Utiliza firmware opensource de Arduino para controlar 4 motores paso a paso.", 
        category: "electrónica", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408378/modulocnc_rlaw4n.jpg"
    },

    {
        title: "Filamento PLA 1.75mm Printalot", 
        price: 2500, 
        stock: 25, 
        description: "Filamento PLA de 1.75mm de diametro, de 1KG, marca Printalot.", 
        category: "filamentos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408790/pla_t7qr2a.jpg"
    },

    {
        title: "Filamento PLA 1.75mm 3n3", 
        price: 2100, 
        stock: 20, 
        description: "Filamento PLA de 1.75mm de diametro, de 1KG, excelente calidad.", 
        category: "filamentos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1687996930/filamento3n3_cgnp3h.webp"
    },

    {
        title: "Filamento PLA FLEX 1.75mm Printalot", 
        price: 5000, 
        stock: 10, 
        description: "Filamento PLA FLEX, de 1.75mm de diametro, de 500gr, marca Printalot. Para imprimir objetos flexibles. Resistente al desgarro, abrasión e hidrocarburos.", 
        category: "filamentos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408673/plaflex_nfjcvp.jpg"
    },

    {
        title: "Filamento ABS 1.75mm Printalot", 
        price: 3000, 
        stock: 20, 
        description: "Filamento ABS de 1.75mm de diametro de 1KG, marca Printalot. Material fuerte y semiflexible. Ideal para piezas mecánicas.", 
        category: "filamentos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408667/abs_hl5f2d.jpg"
    },

    {
        title: "Cooler fan turbina 30x30 12v", 
        price: 1500, 
        stock: 30, 
        description: "Turbina cooler 30x30mm 12v. Ideal para enfriar nozzle o placa Arduino.", 
        category: "repuestos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408897/coolerfan_vbbz88.jpg"
    },

    {
        title: "Pico nozzle de bronce 0.4mm", 
        price: 500, 
        stock: 100, 
        description: "Pico/Nozzle de bronce de 0.4mm, para filamento 1.75mm.", 
        category: "repuestos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1688344665/piconozzle_xcijye.jpg"
    },

    {
        title: "Endstop mecánico Hornet", 
        price: 2200, 
        stock: 15, 
        description: "Interruptor también llamado End Stop (Final de carrera) los cuales son utilizados comúnmente en los equipos de impresion 3D.", 
        category: "repuestos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690408977/endstop_akr5bb.jpg"
    },

    {
        title: "Kit Vidrio Cama Caliente + Pinza Clips x 4 U", 
        price: 1300, 
        stock: 18, 
        description: "Vidrio 220 x 220mm apto para la cama caliente de la impresora, con sus pinzas incluidas.", 
        category: "repuestos", 
        img: "https://res.cloudinary.com/dtudxtnbv/image/upload/v1690409151/hotbed_lxmsfm.jpg"
    }
];
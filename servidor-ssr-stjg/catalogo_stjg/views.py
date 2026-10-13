from django.shortcuts import render

def vista_ssr(request):
    # Lista de los 15 productos oficiales de Tortas Santos
    productos = [
        # Tortas Clásicas
        {"nombre": "Torta Cubana", "precio": 110.00, "categoria": "Tortas Clásicas", "imagen": "img/torta-cubana.png", "stock": 20},
        {"nombre": "Torta de Milanesa", "precio": 95.00, "categoria": "Tortas Clásicas", "imagen": "img/torta-de-milanesa.png", "stock": 15},
        {"nombre": "Jamón con Queso", "precio": 75.00, "categoria": "Tortas Clásicas", "imagen": "img/jamon_con_queso.png", "stock": 25},
        {"nombre": "Pierna Adobada", "precio": 95.00, "categoria": "Tortas Clásicas", "imagen": "img/pierna-adobada.png", "stock": 12},
        {"nombre": "Torta Ahogada", "precio": 100.00, "categoria": "Tortas Clásicas", "imagen": "img/torta-ahogada.png", "stock": 10},
        
        # Especiales
        {"nombre": "Torta de Asada", "precio": 110.00, "categoria": "Especiales", "imagen": "img/torta-asada.png", "stock": 18},
        {"nombre": "Torta de Chilaquiles", "precio": 85.00, "categoria": "Especiales", "imagen": "img/torta-de-chilaquiles.png", "stock": 14},
        {"nombre": "Torta de Pastor", "precio": 95.00, "categoria": "Especiales", "imagen": "img/torta-de-pastor.png", "stock": 22},
        {"nombre": "Torta Vegetariana", "precio": 80.00, "categoria": "Especiales", "imagen": "img/torta-vegetariana.png", "stock": 10},
        {"nombre": "Santos Especial", "precio": 130.00, "categoria": "Especiales", "imagen": "img/santos-especial.png", "stock": 8},
        
        # Bebidas y Extras
        {"nombre": "Agua Fresca (1L)", "precio": 30.00, "categoria": "Bebidas y Extras", "imagen": "img/agua-fresca.png", "stock": 30},
        {"nombre": "Licuado de Plátano", "precio": 45.00, "categoria": "Bebidas y Extras", "imagen": "img/licuado_de_platano.png", "stock": 15},
        {"nombre": "Refresco (355ml)", "precio": 30.00, "categoria": "Bebidas y Extras", "imagen": "img/refresco.png", "stock": 40},
        {"nombre": "Papas Fritas", "precio": 40.00, "categoria": "Bebidas y Extras", "imagen": "img/papas-fritas.png", "stock": 25},
        {"nombre": "Chiles en Vinagre", "precio": 15.00, "categoria": "Bebidas y Extras", "imagen": "img/chiles_en_vinagre.png", "stock": 50},
    ]
    
    return render(request, 'catalogo_stjg/catalogo_ssr.html', {'productos': productos})
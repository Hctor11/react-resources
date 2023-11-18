import pandas as pd

df = pd.read_csv('ReactRes.csv')

objetos_por_categoria = {
}

# Itera sobre cada fila del DataFrame
for index, row in df.iterrows():
    categoria = row['category']
    
    if categoria not in objetos_por_categoria:
        objetos_por_categoria[categoria] = []
    
    objeto_js = {
        'name': row['name'], 
        'link': row['link'],   
        'category': f'CATEGORIES[{list(objetos_por_categoria.keys()).index(categoria)}]',  
        'image': f'image-{index}'
    }
    
    objetos_por_categoria[categoria].append(objeto_js)

# Imprime los objetos por categoría (esto puedes adaptarlo a cómo quieras usarlos)
for categoria, objetos in objetos_por_categoria.items():
    print(f'Objetos en la categoría {categoria}:')
    for objeto in objetos:
        print(objeto ,',')
    print('\n')
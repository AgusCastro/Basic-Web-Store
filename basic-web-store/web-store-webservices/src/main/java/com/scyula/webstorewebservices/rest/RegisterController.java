package com.scyula.webstorewebservices.rest;

import com.scyula.backend.domain.Product;
import com.scyula.backend.domain.User;
import com.scyula.backend.repository.ProductRepoImplementation;
import com.scyula.backend.service.ProductService;
import com.scyula.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("")
public class RegisterController {

    @Autowired
    private UserService userService;
    @Autowired
    private ProductRepoImplementation productRepoImplementation;

    @PostMapping(value = "/registerUser")
    public User create(@RequestBody User user){
        return userService.save(user);
    }

    @GetMapping(value = "/ingresoProductos")
    public void ingreso(){
        ArrayList<Product> array = new ArrayList<>();
        array.add(new Product(null,"Té Dharamsala","Bebidas",18,39,"10 cajas x 20 bolsas"));
        array.add(new Product(null,"Cerveza tibetana Barley","Bebidas",19,17,"24 - bot. 12 l"));
        array.add(new Product(null,"Sirope de regaliz","Condimentos",10,13,"12 - bot. 550 ml"));
        array.add(new Product(null,"Especias Cajun del chef Anton","Condimentos",22,53,"48 - frascos 6 l"));
        array.add(new Product(null,"Mezcla Gumbo del chef Anton","Condimentos",21.35,0,"36 cajas"));
        array.add(new Product(null,"Mermelada de grosellas de la abuela","Condimentos",25,120,"12 - frascos 8 l"));
        array.add(new Product(null,"Peras secas orgánicas del tío Bob","Frutas/Verduras",30,15,"12 - paq. 1 kg"));
        array.add(new Product(null,"Salsa de arándanos Northwoods","Condimentos",40,6,"12 - frascos 12 l"));
        array.add(new Product(null,"Buey Mishi Kobe","Carnes",97,29,"18 - paq. 500 g"));
        array.add(new Product(null,"Pez espada","Pescado/Marisco",31,31,"12 - frascos 200 ml"));
        array.add(new Product(null,"Queso Cabrales","Lácteos",21,22,"paq. 1 kg"));
        array.add(new Product(null,"Queso Manchego La Pastora","Lácteos",38,86,"10 - paq. 500 g"));
        array.add(new Product(null,"Algas Konbu","Pescado/Marisco",6,24,"caja 2 kg"));
        array.add(new Product(null,"Cuajada de judías","Frutas/Verduras",23.25,35,"40 - paq. 100 g"));
        array.add(new Product(null,"Salsa de soja baja en sodio","Condimentos",15.5,39,"24 - bot. 250 ml"));
        array.add(new Product(null,"Postre de merengue Pavlova","Repostería",17.45,29,"32 - cajas 500 g"));
        array.add(new Product(null,"Cordero Alice Springs","Carnes",39,0,"20 - latas 1 kg"));
        array.add(new Product(null,"Langostinos tigre Carnarvon","Pescado/Marisco",62.5,42,"paq. 16 kg"));
        array.add(new Product(null,"Pastas de té de chocolate","Repostería",9.2,25,"10 cajas x 12 piezas"));
        array.add(new Product(null,"Mermelada de Sir Rodneys","Repostería",81,40,"30 cajas regalo"));
        array.add(new Product(null,"Bollos de Sir Rodneys","Repostería",10,3,"24 paq. x 4 piezas"));
        array.add(new Product(null,"Pan de centeno crujiente estilo Gustafs","Granos/Cereales",21,104,"24 - paq. 500 g"));
        array.add(new Product(null,"Pan fino","Granos/Cereales",9,61,"12 - paq. 250 g"));
        array.add(new Product(null,"Refresco Guaraná Fantástica","Bebidas",4.5,20,"12 - latas 355 ml"));
        array.add(new Product(null,"Crema de chocolate y nueces NuNuCa","Repostería",14,76,"20 - vasos  450 g"));
        array.add(new Product(null,"Ositos de goma Gumbär","Repostería",31.23,15,"100 - bolsas 250 g"));
        array.add(new Product(null,"Chocolate Schoggi","Repostería",43.9,49,"100 - piezas 100 g"));
        array.add(new Product(null,"Col fermentada Rössle","Frutas/Verduras",45.6,26,"25 - latas 825 g"));
        array.add(new Product(null,"Salchicha Thüringer","Carnes",123.79,0,"50 bolsas x 30 salch"));
        array.add(new Product(null,"Arenque blanco del noroeste","Pescado/Marisco",25.89,10,"10 - vasos 200 g"));
        array.add(new Product(null,"Queso gorgonzola Telino","Lácteos",12.5,0,"12 - paq. 100 g"));
        array.add(new Product(null,"Queso Mascarpone Fabioli","Lácteos",32,9,"24 - paq. 200 g"));
        array.add(new Product(null,"Queso de cabra","Lácteos",2.5,112,"500 g"));
        array.add(new Product(null,"Cerveza Sasquatch","Bebidas",14,111,"24 - bot. 12 l"));
        array.add(new Product(null,"Cerveza negra Steeleye","Bebidas",18,20,"24 - bot. 12 l"));
        array.add(new Product(null,"Escabeche de arenque","Pescado/Marisco",19,112,"24 - frascos 250 g"));
        array.add(new Product(null,"Salmón ahumado Gravad","Pescado/Marisco",26,11,"12 - paq. 500 g"));
        array.add(new Product(null,"Vino Côte de Blaye","Bebidas",263.5,17,"12 - bot. 75 cl"));
        array.add(new Product(null,"Licor verde Chartreuse","Bebidas",18,69,"750 cc por bot."));
        array.add(new Product(null,"Carne de cangrejo de Boston","Pescado/Marisco",18.4,123,"24 - latas 4 l"));
        array.add(new Product(null,"Crema de almejas estilo Nueva Inglaterra","Pescado/Marisco",9.65,85,"12 - latas 12 l"));
        array.add(new Product(null,"Tallarines de Singapur","Granos/Cereales",14,26,"32 - 1 kg paq."));
        array.add(new Product(null,"Café de Malasia","Bebidas",46,17,"16 - latas 500 g"));
        array.add(new Product(null,"Azúcar negra Malacca","Condimentos",19.45,27,"20 - bolsas 2 kg"));
        array.add(new Product(null,"Arenque ahumado","Pescado/Marisco",9.5,5,"paq. 1k"));
        array.add(new Product(null,"Arenque salado","Pescado/Marisco",12,95,"4 - vasos 450 g"));
        array.add(new Product(null,"Galletas Zaanse","Repostería",9.5,36,"10 - cajas 4 l"));
        array.add(new Product(null,"Chocolate holandés","Repostería",12.75,15,"10 paq."));
        array.add(new Product(null,"Regaliz","Repostería",20,10,"24 - paq. 50 g"));
        array.add(new Product(null,"Chocolate blanco","Repostería",16.25,65,"12 - barras 100 g"));
        array.add(new Product(null,"Manzanas secas Manjimup","Frutas/Verduras",53,20,"50 - paq. 300 g"));
        array.add(new Product(null,"Cereales para Filo","Granos/Cereales",7,38,"16 - cajas 2 kg"));
        array.add(new Product(null,"Empanada de carne","Carnes",32.8,0,"48 porc."));
        array.add(new Product(null,"Empanada de cerdo","Carnes",7.45,21,"16 tartas"));
        array.add(new Product(null,"Paté chino","Carnes",24,115,"24 cajas x 2 tartas"));
        array.add(new Product(null,"Gnocchi de la abuela Alicia","Granos/Cereales",38,21,"24 - paq. 250 g"));
        array.add(new Product(null,"Raviolis Angelo","Granos/Cereales",19.5,36,"24 - paq. 250 g"));
        array.add(new Product(null,"Caracoles de Borgoña","Pescado/Marisco",13.25,62,"24 porc."));
        array.add(new Product(null,"Raclet de queso Courdavault","Lácteos",55,79,"paq. 5 kg"));
        array.add(new Product(null,"Camembert Pierrot","Lácteos",34,19,"15 - paq. 300 g"));
        array.add(new Product(null,"Sirope de arce","Condimentos",28.5,113,"24 - bot. 500 ml"));
        array.add(new Product(null,"Tarta de azúcar","Repostería",49.3,17,"48 tartas"));
        array.add(new Product(null,"Sandwich de vegetales","Condimentos",43.9,24,"15 - frascos 625 g"));
        array.add(new Product(null,"Bollos de pan de Wimmer","Granos/Cereales",33.25,22,"20 bolsas x 4 porc."));
        array.add(new Product(null,"Salsa de pimiento picante de Luisiana","Condimentos",21.05,76,"32 - bot. 8 l"));
        array.add(new Product(null,"Especias picantes de Luisiana","Condimentos",17,4,"24 - frascos 8 l"));
        array.add(new Product(null,"Cerveza Laughing Lumberjack","Bebidas",14,52,"24 - bot. 12 l"));
        array.add(new Product(null,"Barras de pan de Escocia","Repostería",12.5,6,"10 cajas x 8 porc."));
        array.add(new Product(null,"Queso Gudbrandsdals","Lácteos",36,26,"paq. 10 kg"));
        array.add(new Product(null,"Cerveza Outback","Bebidas",15,15,"24 - bot. 355 ml"));
        array.add(new Product(null,"Crema de queso Fløtemys","Lácteos",21.5,26,"10 - paq. 500 g"));
        array.add(new Product(null,"Queso Mozzarella Giovanni","Lácteos",34.8,14,"24 - paq. 200 g"));
        array.add(new Product(null,"Caviar rojo","Pescado/Marisco",15,101,"24 - frascos150 g"));
        array.add(new Product(null,"Queso de soja Longlife","Frutas/Verduras",10,4,"paq. 5 kg"));
        array.add(new Product(null,"Cerveza Klosterbier Rhönbräu","Bebidas",7.75,125,"24 - bot. 0,5 l"));
        array.add(new Product(null,"Licor Cloudberry","Bebidas",18,57,"500 ml"));
        array.add(new Product(null,"Salsa verde original Frankfurter","Condimentos",13,32,"12 cajas"));


        for (Product product : array) {
            productRepoImplementation.saveProduct(product);
        }
    }
}

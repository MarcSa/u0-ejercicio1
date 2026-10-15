import type Product from "./interfaces/product.interface";

const catalog: Product[] =
    [
        {
            id: 1,
            name: "Teclado",
            price: 35,
            inStock: true,
        },
        {
            id: 2,
            name: "Ratón",
            price: 15,
            inStock: true,
        },
        {
            id: 3,
            name: "Monitor 4K",
            price: 680,
            inStock: false,
        },
        {
            id: 4,
            name: "Webcam HD",
            price: 98,
            inStock: true,
        },
        {
            id: 5,
            name: "Disco Duro 2TB",
            price: 35,
            inStock: true,
        },
    ];

const priceOver100: Product[] =
    catalog.filter(
        (
            product,
        ) => {
            return (
                product.price >
                100
            );
        },
    );

const inStockProducts: Product[] =
    catalog.filter(
        (
            product,
        ) =>
            product.inStock,
    );
const productNames: String[] =
    inStockProducts.map(
        (
            product,
        ) =>
            product.name,
    );
const findById =
    (
        id: number,
    ) => {
        const productFound =
            catalog.find(
                (
                    product,
                ) =>
                    id ===
                    product.id,
            );
        if (
            !productFound
        )
            return 0;
        return productFound.name;
    };

console.log(
    `Total de productos en nuestro catálogo: ${catalog.length}`,
);
console.log(
    `Productos con un precio superior a 100€: ${priceOver100.length}`,
);
console.log(
    `Total de productos en stock: ${inStockProducts.length}`,
);
console.log(
    `Nombre de productos disponibles: ${productNames}`,
);
console.log(
    `Producto con id 3 encontrado: ${findById(3)}`,
);

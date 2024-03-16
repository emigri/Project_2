import { useState } from 'react'

import Slider from './Slider' 
import Wrapper from './Wrapper' 
import ProductCard from './Product-Card';

import ProductsData from '../Products.json';
import SiteContentData from '../SiteContent.json';


function Home () {
    
    // Initialise state of the Product Data json (array of objects)
    const [products, setProducts] = useState(ProductsData);
    // Initialise state of the Site Content Data json (single object)
    const [siteContent, setSiteContent] = useState(SiteContentData);

    // View selecteed Product
    const viewSelectedProduct = (id) => {
        console.log("Test - viewSelectedProduct")
        // Filter Projects array (remove item which matches the id)
        // const newProducts = products.filter((item) => item.id !== id);
        // Set new Projects array
        // setProducts(newProducts);
    };


    console.log(products)

        return (
            // Home Content 
            //-------------
            //slider
            //carousel
            //product (cards)
           
            <>
            
            <Slider>{siteContent}</Slider>

            <Wrapper>
            {products.map((item) => (
                <ProductCard
                viewSelectedProduct={viewSelectedProduct}
                id={item.id}
                key={item.id}
                name={item.name}
                image1={item.image1}
                description={item.description}
            />))}
            </Wrapper>

          
            </>
        )
    }
    export default Home;
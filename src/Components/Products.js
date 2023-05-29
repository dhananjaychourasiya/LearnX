import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products=()=>{

    const [products, setProducts]= useState([
        {
            id:1,
            pname:'Android Development',
            desc:'Become an Android Developer from Zero to Hero',
            price:'Rs.3999',
            shipping:'Free on All Orders above Rs. 399/-',
            img:"https://www.freepnglogos.com/uploads/android-logo-png/android-logo-transparent-png-svg-vector-2.png"
          },
          {
            id:2,
            pname:'PHP for Web Development',
            desc:'Become a Wev developer from Beginner to Advanced using PHP and MySQL',
            price:'Rs.3999',
            shipping:'Free on All Orders above Rs. 399/-',
            img:"https://www.freepnglogos.com/uploads/logo-php-png/php-jon-dennis-web-design-graphic-design-support-14.png"
          },
          {
            id:3,
            pname:'JAVA Programming',
            desc:'Java from Beginner to Advanced',
            price:'Rs.1999',
            shipping:'Free on All Orders above Rs. 399/-',
            img:"https://www.freepnglogos.com/uploads/coffee-logo-png/java-coffee-logo-icon-13.png"
          },
          {
            id:4,
            pname:'Full Stack Web Development',
            desc:'Become Full stack developer from Beginner to Advanced',
            price:'Rs.5999',
            shipping:'Free on All Orders above Rs. 399/-',
            img: "https://www.freepnglogos.com/uploads/php-logo-png/php-logo-web-development-techies-institute-for-learning-13.png"
          }
        ]);

    return(
        <div>
            <h2 className="mention">Click or Select Courses Below</h2>
            <ul>
                {
                    products.map((prod)=>{
                        return(
                            <li className="card">
                                <Link to={`/products/${prod.id}`} 
                                style={{textDecoration:'none'}}>
                                    <img src={prod.img}/>
                                    <div>
                                    <h3>{prod.pname}</h3>
                                    </div>
                                    </Link></li>
                        )
                    })
                }
            </ul>
            <Outlet context={products}/>
        </div>
    )
}

export default Products;
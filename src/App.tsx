import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import { MDBContainer } from "mdb-react-ui-kit";
import { Product } from "./types";

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setProducts([]);
        fetchProducts();
    }, [searchQuery]);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const url = searchQuery
                ? `https://dummyjson.com/products/search?q=${encodeURIComponent(searchQuery)}`
                : `https://dummyjson.com/products?limit=20&skip=${skip}&select=title,price,images,description`;
            const response = await axios.get(url);
            const newProducts = response.data.products;
            setProducts((prevProducts) => [...prevProducts, ...newProducts]);
            setSkip((prevSkip) => {
                return prevSkip + 20;
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            fetchProducts();
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isLoading]);

    return (
        <MDBContainer className="my-5 text-center">
            <h1 className="mt-4 mb-5">
                <strong>My Products</strong>
            </h1>
            <SearchBar
                handleSearch={handleSearch}
                searchQuery={searchQuery}
            />
            <ProductList products={products} />
            {isLoading && <p>Loading...</p>}
        </MDBContainer>
    );
};

export default App;

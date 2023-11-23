import { useEffect, useState } from "react";
import myContext from "./myContext";
import { QuerySnapshot, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";


function MyState(props) {
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    })



    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("All fields are required",{
                autoClose:1000,
                hideProgressBar:true
            })
        }

        const productRef=collection(fireDB,"products")
        setLoading(true);
        
        try {
            await addDoc(productRef,products);
            toast.success('Product added successfully',{
                autoClose:1000,
                hideProgressBar:true
            });
            setTimeout(()=>{
                window.location.href='/dashboard'
            },900)
            
            getProductData();
            setLoading(false)


        } catch (error) {
            setLoading(false)
        }
    }

    const [product,setProduct]=useState([]);

    const getProductData=async()=>{
        setLoading(true)
        try {

            const q=query(collection(fireDB,"products"),
            orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];
                QuerySnapshot.forEach((doc) => {
                  productsArray.push({ ...doc.data(), id: doc.id });
                });
                setProduct(productsArray)
                setLoading(false);
              });
              return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false)
        }


    }

    useEffect(()=>{
        getProductData();
    },[])


    //update product 

    const editHandle=(item)=>{
        setProducts(item)
    }

    const updateProduct=async(item)=>{
        setLoading(true);
        try {
            await setDoc(doc(fireDB,'products',products.id),products)
            toast.success('Updated successfully',{
                autoClose:1000,
                hideProgressBar:true
            });
            getProductData();
            setLoading(false);
            setTimeout(()=>{
                window.location.href='/dashboard';
            },900)
            

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
        setProducts("")
    }


    // delete product
    const deleteProduct=async(item)=>{
        try {
            setLoading(true);
            await deleteDoc(doc(fireDB,'products',item.id))
            toast.success('Deleted successfully',{
                autoClose:1000,
                hideProgressBar:true
            })
            setLoading(false);
            getProductData();
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }


    // order 

    const [order,setOrder]=useState([]);

    const getOrderData=async()=>{
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "orders"))
            const ordersArray = [];
            result.forEach((doc) => {
              ordersArray.push(doc.data());
              
            });
            setOrder(ordersArray);
            setLoading(false);
        } catch (error) {
           console.log(error) 
           setLoading(false);
        }
    }

    // getUserData

    const [user,setUser]=useState([]);

    const getUserData=async()=>{
        setLoading(true);
        try {
            const result= await getDocs(collection(fireDB,'users'))
            const usersArray=[];
            result.forEach((doc)=>{
                usersArray.push(doc.data());
            });

            setUser(usersArray);
            setLoading(false)
        } catch (error) {
          console.log(error)  
          setLoading(false);
        }
    }


    useEffect(()=>{
        getProductData();
        getOrderData();
        getUserData();
    },[])

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')


    return (
        <myContext.Provider value={{ loading, setLoading,products,  setProducts,addProduct,product,editHandle,updateProduct,deleteProduct,order,getOrderData,user,searchkey, setSearchkey,filterType, setFilterType,
            filterPrice, setFilterPrice}}>
            {props.children}
        </myContext.Provider>
    )
}   

export default MyState;
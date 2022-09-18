import products from './Data/Products.json';

let data = [...products];

const generateId = (data) =>
  data.reduce((acc, current) => Math.max(acc, current.ProductID), 0) + 1;

  export const insertItem = (item)=>{
    item.product_Id=generateId(data);
    item.inEdit=false;
    data.unshift(item);
    return data;
  };

  export const getItems=()=>{
    return data;
  };

  export const updateItem=(item)=>
  {
    let index=data.findIndex((record)=>record.product_id===item.product_Id);
    data[index]=item;
    return data;
  };

  export const deleteItem=(item)=>{
    let index=data.findIndex((record)=>record.product_Id===item.product_Id);
    data.splice(index,1);
    return data;
  };

  



import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { useState } from "react";
import products from './Data/Products.json';

const inEdit = products.map((item) =>
  Object.assign(
    {
      inEdit: true,
    },
    item
  )
);

const Edit = () => {
    const [data, setData] = useState(Edit);
  
    const itemChange = (e) => {
      let newData = data.map((item) => {
        if (<item className="product_id"></item> === e.dataItem.product_id) {
          item[e.field || ""] = e.value;
        }
  
        return item;
      });
      setData(newData);
    };
    return (
        <Grid data={data} editField="Edit" onItemChange={itemChange}>
          <Column field="product_id" title="Id" width="50px" editable={false} />
          <Column field="product_name" />
          <Column field="product_description"  />
          <Column field="price" width="150px" editor="numeric" />
          <Column field="product_availability" width="50px" editor="boolean" />
        </Grid>
      );
    };

    export default inEdit;
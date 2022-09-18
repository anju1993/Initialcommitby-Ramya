import React from "react";

export const CellEdit=(props)=>{
    const{ dataItem } = props;
    const inEdit=dataItem[props.editField];
    const isNewItem=dataItem.product_Id===undefined;
    return inEdit?(
        <td className="k-command-cell">
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-grid-save-command"
            onClick={()=>
            isNewItem ? props.add(dataItem) : props.update(dataItem
                )}
                >
                    {isNewItem?"Discard":"Cancel"}
                </button>
                </td>
          )
          :
          (
            <td className="k-command-cell">
            <button
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-grid-edit-command"
              onClick={() => props.edit(dataItem)}
            >
              Edit
            </button>
            
          </td>
        );
      };
          
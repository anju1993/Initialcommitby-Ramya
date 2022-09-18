import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Grid,
  GridColumn as Column,
  GridToolbar,
} from "@progress/kendo-react-grid";
import { CellEdit } from "./Celledit";
import { insertItem, getItems, updateItem, deleteItem } from "./inlineedit";
const editField = "inEdit";

class EditToolbar extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.setState({
      data: getItems(),
    });
  }

  CommandCell = (props) => (
    <CellEdit
      {...props}
      edit={this.enterEdit}
      remove={this.remove}
      add={this.add}
      discard={this.discard}
      update={this.update}
      cancel={this.cancel}
      editField={editField}
    />
  ); // modify the data in the store, db etc

  remove = (dataItem) => {
    const data = deleteItem(dataItem);
    this.setState({
      data,
    });
  };
  add = (dataItem) => {
    dataItem.inEdit = true;
    const data = insertItem(dataItem);
    this.setState({
      data: data,
    });
  };
  update = (dataItem) => {
    dataItem.inEdit = false;
    const data = updateItem(dataItem);
    this.setState({
      data,
    });
  }; // Local state operations

  discard = () => {
    const data = [...this.state.data];
    data.splice(0, 1);
    this.setState({
      data,
    });
  };
  cancel = (dataItem) => {
    const originalItem = getItems().find(
      (p) => p.ProductID === dataItem.ProductID
    );
    const data = this.state.data.map((item) =>
      item.ProductID === originalItem.ProductID ? originalItem : item
    );
    this.setState({
      data,
    });
  };
  enterEdit = (dataItem) => {
    this.setState({
      data: this.state.data.map((item) =>
        item.ProductID === dataItem.ProductID ? { ...item, inEdit: true } : item
      ),
    });
  };
  itemChange = (event) => {
    const data = this.state.data.map((item) =>
      item.ProductID === event.dataItem.ProductID
        ? { ...item, [event.field || ""]: event.value }
        : item
    );
    this.setState({
      data,
    });
  };
  addNew = () => {
    const newDataItem = {
      inEdit: true,
      Discontinued: false,
    };
    this.setState({
      data: [newDataItem, ...this.state.data],
    });
  };

  render() {
    return (
      <Grid
        style={{
          height: "420px",
        }}
        data={this.state.data}
        onItemChange={this.itemChange}
        editField={editField}
      >
        <GridToolbar>
          <button
            title="Add new"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={this.addNew}
          >
            Add new
          </button>
        </GridToolbar>
        </Grid>
        );
        }
        }
export default EditToolbar;
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import { toast } from 'react-toastify';

 
function Homedashbord() {
  const successmsg = () => toast("post succesfully Deleted ");
  const [products, setProducts] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [update,setupdate]=useState(false)

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: { value: null, matchMode: FilterMatchMode.CONTAINS },
    price: { value: null, matchMode: FilterMatchMode.EQUALS },
    // 'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // representative: { value: null, matchMode: FilterMatchMode.IN },
    // status: { value: null, matchMode: FilterMatchMode.EQUALS },
    // verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const onGlobalFilterChange = (e) => {
  console.log("v", e.target.value);
  const value = e.target.value;
  let _filters = { ...filters };

  _filters['global'].value = value;

  setFilters(_filters);
  setGlobalFilterValue(value);
};



const renderHeader = () => {
  return (
      <div className="flex justify-content-end">
          <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
          </span>
      </div>
  );
};
const header = renderHeader();
  useEffect(() => {
    axios.get('http://localhost:4002/user/getpost').then((res) => {
      console.log(res)
      setProducts(res.data.data)
      setupdate(false)
    })
  }, [update]);
  const handleEdit = (id) => {
    alert(id)
  }
  const handledelete = (id) => {
   
    axios.delete(`http://localhost:4002/user/deletepost/${id}`).then((res) => {
      console.log(res.status)
      

      if (res.status == 200) {
        successmsg()
       
        setTimeout(() => {
          setupdate(true)
          


        }, 6000);
      }
      
    })
  }
  const imageBodyTemplate = (product) => {
    return <img src={`${product.imageUrl}`} alt={product.image} width={60}  className=" h-4rem shadow-2 border-round" />;
  };
  const actionBodyTemplate = (product) => {
    return (<>
      <div className='flex gap-2'>
        <Button className='text-white py-0' size="small" onClick={() => handleEdit(product._id)} >Edit</Button>
        <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" size="small"  onClick={() => handledelete(product._id)}/>
      </div>
    </>
    )
  };
  return (
   
    <>


      <div className="card">
      <DataTable value={products} filters={filters} globalFilterFields={['title', 'price']} header={header} showGridlines={true} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '40rem', backgroundColor: '#9ebdfc' }}>
          <Column field='createdAt' header="createdAt" sortable ></Column>
          <Column field="image" header="Image"  body={imageBodyTemplate}></Column>
          <Column field="title" filter  header="title" sortable ></Column>
          <Column field="category"  header="Category"></Column>
       
          <Column field="action"  header="Actions" body={actionBodyTemplate}></Column>
        </DataTable>
      </div>
      
    </>
  )
}

export default Homedashbord
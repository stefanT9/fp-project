import React from 'react'
import {Formik} from "formik";
import {Button, Input} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchField = ()=>{
    return(
        <Formik
            initialValues={{searchValue:''}}
            onSubmit={(values,actions)=>{
                console.log(values)
            }}>
            {({handleSubmit,handleChange,handleBlur,values})=>
                <form onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.searchValue}
                        name='searchValue'
                    />
                    <Button type='submit'>
                        <SearchIcon/>
                    </Button>
                </form>
            }
        </Formik>
    )
}

export default SearchField
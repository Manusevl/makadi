import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from "@apollo/react-hooks"
import { useApolloClient } from "@apollo/react-hooks"
import {GET_CATEGORIES} from "../../../graphql/queries"

function setCurrentCategory(_id, client){
    console.log("Set Category: " + _id)
    client.writeData({
        data: {
          selectedCategory: _id
        }
      })
}

const useStyles = makeStyles({
    category: {
      backgroundColor: '#3f51b5',
      color: 'white',
      marginBottom: 2
    }
});

export default function CategoryList(props) {
    const classes = useStyles();

    const client = useApolloClient();
    const { data, loading, error } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const categoriesToRender = data.categories;

    return (
        <div>
            {categoriesToRender.map(category => 
                <Button fullWidth={true} 
                    key={category._id} 
                    onClick={() => setCurrentCategory(category._id, client)} 
                    className={classes.category}>{category.name}
                </Button>
            )}
        </div>
    )
  }

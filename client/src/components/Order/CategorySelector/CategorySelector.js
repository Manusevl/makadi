import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from "@apollo/react-hooks"
import {GET_CATEGORIES} from "../../../graphql/queries"

const useStyles = makeStyles({
    category: {
      backgroundColor: '#3f51b5',
      color: 'white',
      marginBottom: 2
    }
});

export default function CategorySelector(props) {
    const classes = useStyles();

    const { data, loading, error } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;

    const categoriesToRender = data.categories;

    return (
        <div>
            {categoriesToRender.map(category => 
                <Button fullWidth={true} className={classes.category}>{category.name}</Button>
            )}
        </div>
    )
  }

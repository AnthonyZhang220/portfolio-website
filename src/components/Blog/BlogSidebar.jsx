import { Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import React, { useEffect } from 'react'

import "./BlogSidebar.scss"

function BlogSidebar({ allTags }) {
    useEffect(() => {
        console.log(allTags)
    }, [allTags])
    return (
        <Box className="blog-sidebar-container">
            <Box className="blog-sidebar-title">
                <Typography variant='h6'>
                    All Tags
                </Typography>
            </Box>
            <Box className="blog-sidebar-tag-list">
                {
                    allTags?.map((tag, index) => (
                        <Box className="blog-sidebar-tag" key={index} >
                            <Chip label={`#${tag}`} color="primary" size="medium" clickable />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default BlogSidebar
import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {demoVideoUrl,demoChannelTitle, demoVideoTitle, demoChannelUrl } from '../utils/constants'
const VideoCard = ({video:{id:{videoId},snippet}}) => {
    console.log(videoId,snippet);
  return (
    <Card sx={{width:{ xs:'100%' , md:'330px'},boxShadow:'none',borderRadius:0}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet.title}
                sx={{width:'100%',height:160}}
                />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e',height:'105px'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0,60) ||demoVideoTitle.title.slice(0,60)}
            </Typography>
        </Link>
        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle||demoChannelTitle}
                <CheckCircle  sx={{fontSize:15,color:'gray',ml:'3px'}}/>
            </Typography>
        </Link>

        </CardContent>
    </Card>
  )
}

export default VideoCard

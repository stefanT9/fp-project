import React from 'react'
import Head from 'next/head'
import Layout from "../../components/layout";
import { useRouter } from 'next/router'
import Post from '../../components/post';

export default function Account() {
    const router = useRouter()
    const { account } = router.query
    const postsData=[
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]
    return (
        <Layout>
            <Head>
                <title>{account}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main style={{overflow:'auto', paddingTop:'2rem'}}>
                {
                    postsData.map((val,idx)=><Post id='' author={{id:'#',name:'#',surname:'#',displayName:'test' }} text='lorem ipsum text' metadata/>)
                }
            </main>
        </Layout>
    )
}
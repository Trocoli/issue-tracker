import React from 'react'
import IssuesPage from './IssuesPage';
import { Button } from '@radix-ui/themes';

const page = () => {
  return (
    <div><IssuesPage />
    <Button>New issue</Button></div>
  )
}

export default page
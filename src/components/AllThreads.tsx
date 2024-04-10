"use client"
import {getAllThreads} from "@/services/ThreadsService";
import {getAccountInfo} from "@/services";
import {IThreadsData, Thread} from "@/types/ThreadsData";
import ThreadCard from "@/components/ThreadCard";
import threadCard from "@/components/ThreadCard";


export function AllThreads()  {
  const UserData = getAccountInfo()
  function doReturn() {
    // @ts-ignore
    return ThreadRequest.threads.forEach((thread: Thread) => {
      return (<ThreadCard
        id={thread.id}
        title={thread.title}
        subTitle={thread.subTitle}
        base64Banner={thread.base64Banner}
        desc={thread.desc}
        price={thread.price}
        userId={thread.userId}/>)
    })
  }
  if (!UserData) {
    return (<h1></h1>);
  }
  // @ts-ignore
  let ThreadRequest: Promise<IThreadsData> | IThreadsData = getAllThreads().then((res)=>{
    ThreadRequest = res
    doReturn()
  })


  return (<></>)
}

export default AllThreads;
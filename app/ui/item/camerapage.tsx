'use client'

import { Camera } from "@/app/lib/db/schema";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { notFound } from "next/navigation";
import { useRef } from "react";

export function CameraPage({ cam, index }: { cam: Camera, index: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)
    if (cam === undefined) {
        return notFound();
    }
    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    return (
        <section key={index} className="min-h-[100dvh] snap-center justify-center items-center flex relative">
            <div ref={ref} className="h-[70dvh] flex flex-col w-full">
                <div className='flex w-full '>
                    <div className='flex flex-col text-nowrap w-full'>
                        <motion.div className='text-4xl' style={{ y }}>{cam.name}</motion.div>
                        <span className="text-2xl ml-4">{cam.brand}</span>
                        <div className="mt-12 ml-4 flex gap-2 max-w-[60%]">
                            <div>res:</div>
                            <div>{cam.res}p</div>
                        </div>
                        <div className="ml-4 flex gap-2 max-w-[80%]">
                            <div>spe:</div>
                            <div className='max-w-full text-wrap'>{cam.shutter}</div>
                        </div>

                    </div>
                    <div className="py-4 flex items-center mr-16 ">
                        <div className='w-[300px] rounded-md border-1 border-foreground aspect-square flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='w-10/12 ml-4 mt-8 pl-2 flex overflow-hidden '>
                    <Accordion itemClasses={{indicator: 'text-foreground'}} isCompact>
                        <AccordionItem key="description" aria-label="description" title="description" >
                            <p className="text-sm">{cam.description}</p>
                        </AccordionItem>
                        <AccordionItem key="compatible with" aria-label="compatible with" title="compatible with">
                            <div className='flex gap-2'>storage: {cam.compats?.sd.map((sdtype, index)=>(<div key={index}>{sdtype}</div>))}</div>
                            <div className='flex'>lense mount: {cam.compats?.lens.map((lentype, index)=>(<div key={index}>{lentype}</div>))}</div>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-end justify-center w-[15%] pr-2">
                <p className='text-3xl'>{cam.price}</p>
                <div className='py-1 px-3 text-sm text-nowrap bg-foreground text-background'>add to cart</div>
            </div>
            {/* <motion.div className={'bg-red-800 w-[175px] h-[175px] absolute bottom-0 right-0 mb-11 text-2xl flex flex-col items-center justify-center'} style={{ y }}>{`00${index}`}<span className='text-sm'>of 30</span></motion.div> */}
        </section>
    )
}
import Image from "next/image";
import React from "react";
import Container from "./ContainerSection";


export default function Testimonials() {
    return (
        <Container>
            <section id='testimonials'>
                <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt-12 items-center justify-center text-center">
                    <h2 className="max-w-2xl mt-3 text-3xl font-bold  leading-snug tracking-tight text-gray-800 lg:leading-tight  lg:text-4xl dark:text-white">Estas son las opiniones de nuestros clientes</h2>
                </div>
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mb-8">
                    <div className="lg:col-span-2 xl:col-auto">
                        <div className="flex flex-col justify-between w-full h-full bg-yellow-50 px-10 rounded-2xl py-10 ">
                            <p className="text-2xl leading-normal ">
                                Muy <Mark>satisfecha</Mark>
                                con los resultados. Estoy encantada con los resultados que obtuve al utilizar sus servicios.
                            </p>

                            <Avatar
                                src='/images/user1.jpg'
                                name="Malka Sanchez"
                                title="CEO Banquetes Gadol"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between w-full h-full bg-yellow-50 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
                            <p className="text-2xl leading-normal ">
                                Excelente elección <Mark>muy agradecido</Mark>
                                por el trabajo que han realizado para nuestro gym.
                            </p>

                            <Avatar
                                src='/images/user2.jpg'
                                name="Merlin Solarte"
                                title="COACH Trainning Max Gym"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-between w-full h-full bg-yellow-50 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
                            <p className="text-2xl leading-normal ">
                                Hicieron una <Mark>asombrosa</Mark> landing page para nuestra sede.                     Orgullosos de tan excelente trabajo.
                            </p>

                            <Avatar
                                src='/images/user3.jpg'
                                name="Julio Gandara"
                                title="Administrador UdeC CTM"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

function Avatar(props) {
    return (
        <div className="flex items-center mt-8 space-x-3">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <Image
                    src={props.src}
                    width="40"
                    height="40"
                    alt="Avatar"
                />
            </div>
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
            </div>
        </div>
    );
}

function Mark(props) {
    return (
        <>
            {" "}
            <mark className="text-white bg-gray-400 rounded-md ring-yellow-100 ring-4 dark:ring-yellow-500 dark:bg-yellow-500 dark:text-white-200">
                {props.children}
            </mark>{" "}
        </>
    );
}

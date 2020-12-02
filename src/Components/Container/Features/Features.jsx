import React from "react";
import mod from "./Features.module.css";
import {NavLink} from "react-router-dom";

const Features = () => {
    return (
        <div className='container'>
            <div className={mod.box}>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://i.pinimg.com/originals/1c/6c/0d/1c6c0d91fad08db3c80296f3f2efc884.jpg"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Сотовая связь и городской телефон
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Samsung_Internet_logo.svg/2688px-Samsung_Internet_logo.svg.png"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Интернет и телевидение
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://w7.pngwing.com/pngs/830/641/png-transparent-service-public-utility-computer-icons-energy-broker-contact-energy-blue-text-service.png"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        коммунальные услуги
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAADBCAMAAADxRlW1AAAAkFBMVEXDSEj////CRUXDQUHAOjq/Njb78/Psx8fJW1v46Ojrycn04ODFS0vBPT3CQ0P++/vfpKThq6u+MTHReXnANzfbl5fu0ND57OzGUFDnvb389/f14uLOc3PKYWHltrbXi4vObW3TgYHdnZ3alJS7GRnz2dm8IyPfp6fNZ2fHVVXYjY29Kyvmubnir6/ThITObm5K5WNKAAAGFUlEQVR4nO2ca1erOhCGSwLVthKUcqAXe/VwbHWr///fHSYD4aL7Q72xEt5n+WUKrpW8SSYzQ2A0AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODvKEb03Y5eUad74m0jwuEKIf94zGp9u5B9t6Yn1NyryeZh3+3pB/XqNXkdqAw3s6YK0fUwfYNYHO+I7UTLkAZ9N6gfhAwJP7nVMgx0MhiSJalwO1DPUKE2pMLU77sdfZMVKozjvlvRM2FKk+Fm4I4hfNEhg+q7Hf3CceSfgbtHsSAV8qG7R6XjyFh+kTCw2rWEV963sLY69JL/fI8KXmrzquK46RvIrM5G1Op7VLA7AJW57kMDnWmmta09x7hxg/6P9VXbtjsZCbfUh30SVsQ60ZwH5of/osLO6xuCHd2wMzfE2rXsrI681IH6cFePpNKdPNb1yJhUmNWd5Hhzb37wKTGN9larwHFT2lDhnn54qX/oquBP6YY690jW5BwXNu+UxdDqtLIeerEhf3lVO7uuCuxJTB4qFmNyE8kvNfeHCPXQns1QigXJsq43vq4Ko0lrY1R7ur60eosoVLjtODdJQfXqr3NBLMhOzdi/8yNWovbUi2XtB3yqOUT1Ou+qoOOseuzDR7IPVjvHgpB6kddjqfeAhs/vqMDJ+KNRTTvL1cZu51h0g1ZAVNuys/93VOhe9smNZL/V2B8jXLb3fx7sOhZkFWQ12L4Os07V7eo81kHVb7b4J1BPutfqpmSkHcVWVnaiVRCVKblUWSG0Zlur42dCnKkfq4kh69hkRrVJonidux8s3yIKgq+nlXPbt4hya/wSY6srTQynR19hYv9UKDeF8cygl/rEmGSt2hczY1Iq1YgkLUZST/I4KHl+IHv+XJr/Rs2rzzpcmFdmrDPQO+u3iIKYtoGViZl5bpjMoB016WqCZ0JFeSTT7hJLCfesDoROZJoKQ1sFfrLZLrF49y6owANqBl9cUzhoKgxtFYTOOE11ISAzO9u/Rbw/xnBDK8RUGFoqcPVhVlcXKNZY2x8zEQGpsDZmSNWk6GMVrr3mPFGnyLO9Cm9IdBHNzGudLJsKQ0sFrkYYn8ElFrur8AYux5swOLwjs8oy2yq0K0uOlFgYPghqdn351Nz+Wipwfc7o5dMjm+jkhgqdcjwX46t53lJBd7s+GxjrEovlVXhDTHtjJquAUOfa2+cPYsdn7UGqsDLW0YIzh0B4iNet5GDczCOiytDVhZbhPbmxUVbL/XPMHFkPlSf4FKuNG76RkJ8VIb92RwTOB7xschmz6UE6JMLI128RvUlxESp0SYNiRejKytGNUPjT8NNHqw+qfQcJpciTm76b0TNcjrf+oesX4Txy8KfjD6TCduCOgY+orAf+7vUo0CnUbaIuCxn6bvY3w4Vob/l2fREjxzyJyDgzGF/ExJFyW4W6jz6TTjlTaSoJD+NPqBC5FmOEm+nl0yF1TIRiUfin4/LqEqYvji0IjZL+ZQz4myYAADBMhAxl8feR+1d0ZQgbgwgXx2meTx9G74qxSh6WaZ6+bJzXQaltFRc+Ju3O+oesihjPrjyc/Bh1ntTh8cxvyuA3D8neuyyDGK2bWULeeH3av2slEA49n3yHX37qrkqr6gc16q38qTxCn7lboxQb3f18E8d7fjHCTHyu1UdPQTxix7Fzdk1w3S0NFCWY2hVWxXl+2zQ6FXNDBPq4Q+rs87xEv0b4pnsuD9TX6h1DPgFWluoDqseMnd0tE/3ibDnV9aGGaalC6905PgHUUxt/HlahOtY3VBXYBfIZd6nXQPUxJ354teSdM9Erwtmtkr1jXuQQQnJp/mBOQFPPo7kvhIpf3PaOvBN4s8NisdMi1N8k4O8uRLfXN2/8eSPHnkQ0qV4lW5VhU/2mJH9ioNChvDRzdipQBJ03w+Tmof/w2LwSuXS47R3q3JBh2qoxyMbZ0NXe2chRo0aP5TOq7NgpI4Tz6vPBV2eXZwIhwvNumafb18X7Kou4v0vzq6P7VZYCofwkCT880aFCP/GdOuoJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwC/xPxdhXjU+XESeAAAAAElFTkSuQmCC"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Интернет магазины и хостинг услуги
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://gos.1cfresh.com/resources/images/content/solutions/asfo/logo.png"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        гоc услуги и штрафы
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://image.shutterstock.com/image-vector/bank-icon-logo-vector-260nw-399995245.jpg"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Банковские и финансовые услуги
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://s3.amazonaws.com/thumbnails.venngage.com/template/01df7dcb-6942-4db8-9fba-4fb9c58bb367.png"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Игры и социальные сети
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvhRsaVPW2EXzvjj9S3rx5LX5YG2sFKyNVQ&usqp=CAU"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Объявление и реклама
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvhRsaVPW2EXzvjj9S3rx5LX5YG2sFKyNVQ&usqp=CAU"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Объявление и реклама
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvhRsaVPW2EXzvjj9S3rx5LX5YG2sFKyNVQ&usqp=CAU"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Объявление и реклама
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvhRsaVPW2EXzvjj9S3rx5LX5YG2sFKyNVQ&usqp=CAU"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Объявление и реклама
                    </div>
                </div>

                <div className={mod.features}>
                    <div className={mod.image}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvhRsaVPW2EXzvjj9S3rx5LX5YG2sFKyNVQ&usqp=CAU"
                            alt="IMG"/>
                    </div>
                    <div className={mod.text}>
                        Объявление и реклама
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Features;
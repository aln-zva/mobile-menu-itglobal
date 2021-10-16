
const by = {
    data: [
        {
            id: 'service',
            title: 'Сервисы',
            menuData: [
                {
                    subtitle: 'Облачные вычисления',
                    info: [
                        {
                            name: 'Облачные вычисления',
                            info: 'Гибкие, производительные и безопасные решения в облаках гиперскейлеров.'
                        },
                        {
                            name: 'Публичное облако',
                            info: 'Аренда виртуальной инфраструктуры в облаке без дополнительных затрат.'
                        },
                        {
                            name: 'Частное облако',
                            info: 'Изолированная, защищенная ИТ-инфраструктура с неограниченными возможностями масштабирования.'
                        },
                        {
                            name: 'Гибридное облако',
                            info: 'Гибридное облако предоставляет возможность управлять нагрузками,' +
                                ' быстро увеличивать вычислительные мощности за счет ресурсов облачного провайдера.'
                        },
                        {
                            name: 'Мультиоблако',
                            info: 'Гибкая облачная среда с возможностью использования облачных сервисов и решений от разных провайдеров.'
                        },
                        {
                            name: 'PCI DSS в облаке',
                            info: 'Решение в области стандарта безопасности платёжных карт PCI DSS 3.2.1..'
                        },
                        {
                            name: 'Гибридное облако',
                            info: 'Гибридное облако предоставляет возможность управлять нагрузками,' +
                                ' быстро увеличивать вычислительные мощности за счет ресурсов облачного провайдера.'
                        },
                        {
                            name: 'Гибридное облако',
                            info: 'Гибридное облако предоставляет возможность управлять нагрузками,' +
                                ' быстро увеличивать вычислительные мощности за счет ресурсов облачного провайдера.'
                        },
                    ]
                },
                {
                    subtitle: 'Выделенные серверы',
                    info: [
                        {
                            name: 'Выделенные серверы',
                            info: 'Управление разработкой по CI/CD с использованием Docker и Kubernetes.'
                        }
                    ]
                },
                {
                    subtitle: 'Платформенные сервисы',
                    info: [
                        {
                            name: 'Платформенные сервисы',
                            info: 'Решения для различных потребностей бизнеса и гибкой работы с нагрузками.'
                        },
                        {
                            name: 'Удаленное рабочее место',
                            info: 'Удобный доступ к корпоративным приложениям с любого устройства, отовсюду, где есть интернет'
                        },
                        {name: 'S3 хранилище', info: 'Храните практически бесконечные объемы защищенных данных.'},
                        {name: 'Инфраструктура для SAP', info: 'Решение подходит при внедрении SAP продуктов.'},
                        {name: '1С в облаке', info: 'Удобный сервис для удаленной работы с бухгалтерией.'},
                        {
                            name: 'Мониторинг',
                            info: 'Отслеживайте показатели доступности и производительности ваших ИТ-сервисов.'
                        },
                        {name: 'VDI', info: 'Аренда виртуальных рабочих мест по модели DaaS.'},
                        {name: 'ITG Scale Cloud', info: 'Аренда многопроцессорных машин для In-Memory вычислений.'},
                    ]
                },
                {
                    subtitle: 'Информационная безопасность',
                    info:
                        [{
                            name: 'Информационная безопасность',
                            info: 'Практика предотвращения несанкционированного доступа, использования, ' +
                                'раскрытия, искажения, изменения, исследования, записи или уничтожения информации.'
                        }
                        ]
                }
            ]
        },
        {
            id: 'manage',
            title: 'Managed IT',
            menuData:
                [
                {
                    subtitle: 'Управление облаками',
                    info: [
                        {
                            name: 'Управление облаками',
                            info: 'Гибкие, производительные и безопасные решения в облаках гиперскейлеров.'
                        },
                        {name: 'Amazon Web Services', info: 'Управление облачными сервисами AWS.'},
                        {name: 'Alibaba Cloud', info: 'Управление облачными сервисами Alibaba Cloud.'},
                        {name: 'Microsoft Azure', info: 'Управление облачными сервисами Microsoft Azure.'},
                        {name: 'Google Cloud Platform', info: 'Управление облачными сервисами Google Cloud Platform.'},

                    ]
                },
                {
                    subtitle: 'ManagedDevOps',
                    info: [
                        {name: 'ManagedDevOps', info: 'Управление разработкой по CI/CD с использованием Docker и Kubernetes.'},
                        {name: 'Managed CI/CD', info: 'Автоматизируем процесс интеграции, доставки и развертывания кода.'},
                    ]
                },
                {
                    subtitle: 'Аутсорсинг сервисов',
                    info: [
                        {
                            name: 'Аутсорсинг сервисов',
                            info: 'Управление инфраструктурой, администрирование, мониторинг и поддержка 24/7 по модели аутсорсинга.'
                        },
                        {name: 'Администрирование серверов', info: 'Поддержка операционных систем, СУБД, серверов приложений.'},
                        {
                            name: 'Администрирование инфраструктуры VMware',
                            info: 'Управление ИТ-инфраструктурой клиента на основе решений для виртуализации VMware.'
                        },
                        {name: 'Managed Networks', info: 'Проектирование и обслуживание корпоративных сетей.'},
                        {
                            name: 'Аутсорсинг ИТ‑сервисов Microsoft',
                            info: 'Комплексные решения по аутсорсингу сервисов Microsoft в облаке и on-premise.'
                        },
                        {
                            name: 'Управляемые сервисы',
                            info: 'Дистанционная поддержка и обслуживание облачной инфраструктуры, серверов, СХД, баз данных, корпоративных приложений и других сервисов.'
                        },
                    ]
                },
                {
                    subtitle: 'Managed Kubernetes',
                    info: [
                        {name: 'Managed Kubernetes', info: 'Помогаем строить и внедрять кластеры Kubernetes.'}
                    ]
                },
                {
                    subtitle: 'Managed Databases',
                    info: [
                        {name: 'Managed Databases', info: 'Создаем, настраиваем и администрируем базы данных.'}
                    ]
                }
            ]
        }
        ,
        {
            id: 'solutions',
            title: 'Решения',
            menuData:
            [
                {
                    subtitle: 'Решения для автоматизации',
                    info: [
                        {name: 'Решения для автоматизации', info: 'Готовые решения и сервисы для автоматизации процессов.'},
                        {name: 'SimpleOne', info: 'ESM-платформа для автоматизации бизнес-процессов.'}
                    ]
                },
                {
                    subtitle: 'Решения для коммуникации',
                    info: [
                        {
                            name: 'Решения для коммуникации',
                            info: 'Платформы для обеспечения качественных коммуникаций с клиентами и сотрудниками.'
                        },
                        {name: 'Cisco Webex', info: 'Сервис для видеоконференций и совместной работы корпоративного уровня.'},
                    ]
                }, {
                subtitle: 'Решения для телекома',
                info: [
                    {name: 'Решения для телекома', info: 'Комплексные решения для повышения качества услуг операторов связи.'},
                    {name: 'СКАТ', info: 'Платформа анализа трафика для классификации и обработки пакетов.'},
                    {name: 'BRAS', info: 'Сервисный шлюз широкополосного удаленного доступа.'},
                    {
                        name: 'СОРМ и «пакет Яровой»',
                        info: 'Программно-аппаратные комплексы для реализации ОРМ и «закона Яровой».'
                    },
                ]
            },
                {
                    subtitle: 'Решения для виртуализации',
                    info: [
                        {
                            name: 'Решения для виртуализации',
                            info: 'Технологии и решения для построения виртуальной инфраструктуры.'
                        },
                        {
                            name: 'vStack',
                            info: 'Гиперконвергентная платформа для создания виртуального дата-центра Enterprise-уровня.'
                        },
                        {
                            name: 'FlexPod',
                            info: 'Универсальное конвергентное решение для построения виртуальной инфраструктуры.'
                        },

                    ]
                },

            ]
        }
        ,
        {
            id: 'about',
            title: 'О компании',
            menuData:
            [
                {subtitle: 'О компании ', info: []},
                {subtitle: 'Наши клиенты', info: []},
                {subtitle: 'Контакты', info: []},
                {subtitle: 'Новости', info: []},
                {subtitle: 'Мероприятия', info: []},
                {subtitle: 'Отзывы клиентов', info: []},
                {subtitle: 'Блог', info: []},

            ]
        }
        ],
    footer: {
        contacts: 'Контакты',
        search: 'Поиск'
    }
}

export {by}

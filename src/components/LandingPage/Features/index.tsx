import React from 'react'

import graphicAnalytics from '../images/analytics@2x.png'
import graphicInsights from '../images/insights@2x.png'
import graphicPlatform from '../images/platform@2x.png'

export const Features = () => {
    return (
        <div className="lp-features text-white text-center pt-4">
            <div className="w-11/12 max-w-4xl mx-auto relative">
                <h2>A single platform that does it all</h2>
                <p className="opacity-60 mt-1 text-center mb-12 mx-auto lg:w-9/12 text-base">
                    Until now, you'd need multiple services to do all this. Plus only PostHog lets you keep customer
                    data on your own infrastructure.
                </p>

                <div className="grid platform-columns">
                    <div className="">
                        <figure className="my-0">
                            <img
                                src={graphicAnalytics}
                                alt="Analytics"
                                width="296"
                                height="296"
                                className="mx-auto my-0"
                                loading="lazy"
                            />
                        </figure>
                        <div className="mb-8 lg:mb-0">
                            <h4 className="font-osiris font-normal lowercase">Analytics</h4>
                            <ul className="list-none px-4">
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18 4.8v2.4h1.92l-6.72 6.72-4.8-4.8-8.4 8.4 1.68 1.68 6.72-6.72 4.8 4.8 8.4-8.4v1.92H24v-6h-6z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Trends</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4 5.833a.5.5 0 01.5-.5h15a.5.5 0 01.5.5V7.5a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5V5.833zm2.667 5.334a.5.5 0 01.5-.5h9.666a.5.5 0 01.5.5v1.666a.5.5 0 01-.5.5H7.167a.5.5 0 01-.5-.5v-1.666zM9.833 16a.5.5 0 00-.5.5v1.667a.5.5 0 00.5.5h4.334a.5.5 0 00.5-.5V16.5a.5.5 0 00-.5-.5H9.833z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Funnels</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M3.626 9.19H1.892a.693.693 0 00-.693.693v2.502c0 .383.31.693.692.693h.168v3.649c0 .295.239.534.534.534h.812c.295 0 .535-.239.535-.534v-3.175a1.8 1.8 0 01-.314-1.012V9.19zM3 6.739c-.595 0-1.078.483-1.078 1.079 0 .194.055.374.145.531.186.326.533.548.934.548.253 0 .483-.091.666-.237.066-.308.21-.585.41-.813l.002-.03c0-.595-.483-1.078-1.078-1.078zM22.106 9.19h-1.734v3.35c0 .375-.117.723-.313 1.012v3.175c0 .295.239.534.534.534h.812a.534.534 0 00.534-.534v-3.649h.167c.383 0 .693-.31.693-.693V9.883a.693.693 0 00-.693-.693zM20.999 8.897c.402 0 .748-.222.934-.548.09-.157.145-.337.145-.531a1.079 1.079 0 10-2.158 0c0 .01.003.019.003.028.2.229.344.506.41.814.183.146.413.237.666.237zM7.916 8.19c0-.041.004-.082.007-.124H5.438a.97.97 0 00-.97.97v3.504c0 .535.435.97.97.97h.235v5.109c0 .412.335.747.748.747h1.136a.748.748 0 00.748-.747l.001-4.714a2.073 2.073 0 01-.39-1.21V8.19zM6.99 4.634a1.51 1.51 0 10-.001 3.022 1.51 1.51 0 000-3.022zM18.56 8.067h-2.484c.002.042.005.082.005.124v4.505c0 .452-.145.869-.39 1.211v4.713c0 .412.335.747.748.747h1.136a.748.748 0 00.748-.747l.002-5.11h.235a.97.97 0 00.97-.97V9.037a.969.969 0 00-.97-.97zM13.994 6.943h-3.99c-.688 0-1.247.558-1.247 1.247v4.505c0 .688.558 1.247 1.246 1.247h.303v6.568c0 .53.43.962.96.962h1.462c.532 0 .962-.43.962-.962v-6.568h.304c.688 0 1.247-.559 1.247-1.247V8.19c0-.689-.56-1.247-1.247-1.247zM10.944 6.101a1.933 1.933 0 002.11 0 1.942 1.942 0 10-2.11 0zM17.008 7.655c.411 0 .783-.164 1.055-.43a1.51 1.51 0 10-1.055.43z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Cohorts</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M15.913 17.976A6.986 6.986 0 0112 19.15c-3.625 0-6.673-2.735-7.056-6.168h1.176c.384 0 .695-.192.887-.48a.912.912 0 000-.984l-2.255-3.72a1.02 1.02 0 00-.888-.48 1.05 1.05 0 00-.888.48c-.792 1.272-1.968 3.335-2.16 3.625-.095.192-.192.384-.192.575 0 .576.384.984.984.984l1.272.001c.504 4.608 4.415 8.136 9.12 8.136 1.752 0 3.527-.48 4.992-1.465.48-.287.576-.887.288-1.367a1.04 1.04 0 00-1.368-.313zM22.393 11.015H21.12C20.616 6.408 16.705 2.88 12 2.88c-1.753 0-3.528.48-4.993 1.464-.48.288-.575.888-.287 1.368.287.48.887.576 1.367.288a6.986 6.986 0 013.913-1.176c3.624 0 6.672 2.736 7.055 6.168h-1.175a1.05 1.05 0 00-.888.48.912.912 0 000 .985l2.255 3.72c.192.287.48.48.888.48.384 0 .696-.193.888-.48.792-1.273 1.968-3.336 2.16-3.625.096-.192.192-.384.192-.576 0-.552-.408-.96-.983-.96z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Retention</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M19.584 10.225c.912-1.248 2.88-4.2 2.88-6.288A3.328 3.328 0 0019.129.6a3.328 3.328 0 00-3.336 3.336c0 2.088 1.968 5.015 2.88 6.288.215.287.671.287.911 0zM17.52 3.912a1.608 1.608 0 111.607 1.608c-.887.024-1.607-.696-1.607-1.608zM19.128 11.64h-6.072a2.838 2.838 0 00-2.833 2.832 2.838 2.838 0 002.832 2.833h1.248a1.367 1.367 0 110 2.735H7.728a.748.748 0 00-.745.745c0 .407.336.744.745.744h6.575a2.838 2.838 0 002.832-2.832 2.838 2.838 0 00-2.832-2.833h-1.248a1.367 1.367 0 110-2.735h6.073a.748.748 0 00.744-.745.748.748 0 00-.744-.744zM6.575 18.384a.753.753 0 00-1.055 0l-1.368 1.368-1.368-1.368a.753.753 0 00-1.055 0 .753.753 0 000 1.056l1.367 1.368-1.367 1.368a.753.753 0 000 1.055.742.742 0 00.527.216.745.745 0 00.528-.216l1.368-1.368 1.368 1.368a.742.742 0 00.528.216.745.745 0 00.527-.216.753.753 0 000-1.055l-1.367-1.368 1.367-1.368c.29-.312.29-.768 0-1.056z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Paths</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.627 3.6A8.516 8.516 0 004.94 8.423l-.255-.45a.958.958 0 00-.87-.503.96.96 0 00-.81 1.44l1.32 2.355a.96.96 0 001.275.39l2.347-1.2a.965.965 0 00.456-1.309.963.963 0 00-1.326-.401l-.21.105a6.6 6.6 0 015.76-3.33c3.653 0 6.578 2.897 6.578 6.48 0 3.554-2.886 6.433-6.495 6.48a.96.96 0 10.03 1.92c4.625-.06 8.385-3.802 8.385-8.4 0-4.635-3.821-8.4-8.498-8.4zm-.157 3.585a.96.96 0 00-.945.975V12c-.001.292.132.567.36.75l2.4 1.92a.962.962 0 001.2-1.5l-2.04-1.635V8.16a.957.957 0 00-.975-.975z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Session browsing</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M6.789 5.61C5.41 5.266 5.41 4.885 5.41 4.722c0-.59.79-.678 1.261-.678.825 0 1.682.278 2.038.407.095.035.2.019.257-.072l.737-1.174c.058-.092.012-.17-.083-.205-.379-.144-1.339-.473-2.411-.563l.002-1.04c0-.13-.067-.196-.198-.196H5.987c-.131 0-.198.067-.198.197V2.48c-1.614.271-2.36 1.286-2.36 2.24 0 1.163.936 1.988 2.782 2.45 1.378.347 1.378.727 1.378.89 0 .59-.79.678-1.261.678-.826 0-1.684-.278-2.04-.407-.095-.035-.2-.02-.256.072l-.735 1.174c-.058.092-.012.17.083.207.379.144 1.339.473 2.411.563v1.037c0 .131.067.197.198.197h1.027c.13 0 .197-.067.197-.197v-1.084c1.615-.272 2.36-1.286 2.36-2.24-.002-1.163-.937-1.987-2.784-2.45zM6.592 16.309H2.265c-.389 0-.541.152-.541.54v5.409c0 .389.152.542.54.542h4.327c.388 0 .541-.153.541-.541V16.85c0-.389-.152-.541-.54-.541zM14.164 11.982H9.837c-.388 0-.541.153-.541.541v9.736c0 .388.153.54.54.54h4.328c.388 0 .541-.152.541-.54v-9.736c0-.388-.153-.54-.54-.54zM21.736 6.573H17.41c-.388 0-.54.152-.54.54V22.26c0 .388.152.54.54.54h4.327c.388 0 .54-.152.54-.54l.002-15.145c0-.389-.152-.541-.541-.541z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Revenue tracking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="insights-column">
                        <figure className="my-0">
                            <img
                                src={graphicInsights}
                                alt="Insights"
                                width="296"
                                height="296"
                                className="mx-auto my-0"
                                loading="lazy"
                            />
                        </figure>
                        <div className="mb-8 lg:mb-0">
                            <h4 className="font-osiris font-normal lowercase">Insights</h4>
                            <ul className="list-none px-4">
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.087 21.168a.569.569 0 01-.575.575h-9a.569.569 0 01-.576-.575c0-.336.265-.576.576-.576H7.44c1.032-.12 1.607-.552 1.895-.96h5.376c.287.408.864.84 1.895.96h-.095c.313 0 .576.24.576.576zm5.448-6.36v2.52a1.348 1.348 0 01-1.344 1.295H2.806c-.72 0-1.32-.575-1.344-1.295V3.766c0-.84.696-1.536 1.536-1.536h18.024c.84 0 1.536.696 1.536 1.536l-.023 11.042zm-9.311 2.136a.328.328 0 00-.336-.335h-1.775a.328.328 0 00-.336.335v.24c0 .192.144.336.336.336h1.775a.328.328 0 00.336-.336v-.24zm8.063-1.849V3.791a.267.267 0 00-.264-.264H2.999a.267.267 0 00-.265.264v11.304c0 .145.12.265.265.265h18.024c.144 0 .264-.12.264-.265zm-4.632-5.663A4.66 4.66 0 0112 14.087a4.66 4.66 0 01-4.656-4.655A4.66 4.66 0 0112 4.776a4.66 4.66 0 014.655 4.656zm-2.111-.24l-3.625-2.088c-.192-.096-.407.024-.407.24v4.176c0 .215.24.335.407.24l3.625-2.088c.191-.12.191-.385 0-.48z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Session recordings</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.08 1.2a.48.48 0 00-.48.48v20.64a.48.48 0 10.96 0V1.68a.48.48 0 00-.48-.48zm.96 1.44v9.12h9.6V2.64h-9.6zm10.08 2.4v7.2H10.8v2.4h9.6v-9.6h-5.28z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Feature flags</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.16 17.76c0 .792.648 1.44 1.44 1.44h6.72v-6.072c0-.192.096-.36.265-.432.168-.073.36-.073.504.047l6 4.513a.443.443 0 01.192.432.502.502 0 01-.264.384l-1.512.745.192.384h4.704c.792 0 1.44-.649 1.44-1.44V7.2H2.16v10.56zM13.848 12l.864-.432a.48.48 0 01.648.216.48.48 0 01-.215.647l-.865.433a.692.692 0 01-.215.047.506.506 0 01-.432-.264c-.12-.24 0-.527.215-.647zm-2.112-1.344l.312-.913c.072-.264.36-.384.6-.312.24.072.385.36.312.6l-.312.912a.516.516 0 01-.455.336c-.048 0-.096 0-.145-.024-.24-.07-.383-.36-.312-.6zm-2.664-.96a.48.48 0 01.648.215l.432.865a.48.48 0 01-.215.648.693.693 0 01-.216.047.506.506 0 01-.432-.264l-.409-.863c-.12-.24-.048-.528.192-.648zm-.36 5.424a.48.48 0 01-.215.648l-.865.432a.693.693 0 01-.215.048.506.506 0 01-.432-.264.48.48 0 01.215-.648l.865-.432a.482.482 0 01.647.216zm-1.967-2.712c.072-.264.36-.384.6-.312l.912.312c.24.072.384.36.312.6a.516.516 0 01-.456.336c-.047 0-.095 0-.144-.025l-.912-.312a.457.457 0 01-.312-.6zM20.4 2.4H3.6c-.792 0-1.44.648-1.44 1.44v2.4h19.68v-2.4c0-.792-.648-1.44-1.44-1.44zM4.08 4.8a.48.48 0 010-.96.48.48 0 010 .96zm2.4 0a.48.48 0 010-.96.48.48 0 010 .96zm2.4 0a.48.48 0 010-.96.48.48 0 010 .96zm5.568 14.016l1.08 2.16-1.296.624-1.08-2.136a.453.453 0 00-.432-.264c-.072 0-.144.024-.216.048l-1.224.624v-5.784l4.608 3.455-1.248.625a.494.494 0 00-.192.648z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Heatmaps</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M12 24h-1.5V0H12v24zM1.5 21V3a.75.75 0 01.75-.75h8.25a.75.75 0 01.75.75v18a.75.75 0 01-.75.75H2.25A.75.75 0 011.5 21zm3-15.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm0 2.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM3 19.5h6.75V18H3v1.5zm0-3h6.75V15H3v1.5zm0-3h6.75V12H3v1.5zM15 3.75v6h6v-6h-6zm7.5-1.5v9h-9v-9h9zM13.5 12.75h9v9h-9v-9z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>A/B testing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <figure className="my-0">
                            <img
                                src={graphicPlatform}
                                alt="Platform"
                                width="296"
                                height="296"
                                className="mx-auto my-0"
                                loading="lazy"
                            />
                        </figure>
                        <div className="mb-8 lg:mb-0">
                            <h4 className="font-osiris font-normal lowercase">Platform</h4>
                            <ul className="list-none px-4">
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.789 15.034a2.945 2.945 0 00.421 5.861 2.945 2.945 0 00.421-5.861v-2.122h9.685v-2.779L24 9.123V6.596l-2.105-1.263-2.106 1.263v2.527l1.685 1.01v1.937h-5.895V9.923a2.105 2.105 0 10-.842 0v2.147H9.263V9.965h1.684v-4.21h-4.21v4.21H8.42v2.105H2.526V9.965h1.685L2.105 5.333 0 9.965h1.684v2.947H11.79v2.122zm1.982 2.37l-1.982 1.982-1.14-1.14.596-.596.544.544 1.386-1.386.596.596z"
                                                fill="#fff"
                                                opacity=".5"
                                            />
                                        </svg>
                                    </figure>
                                    <span>Event pipelines</span>
                                </li>
                                <li>
                                    <figure></figure>
                                    <span>SDKs</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M22.007 9.192H2.64c-.625 0-1.128.505-1.128 1.128v3.744c0 .625.504 1.128 1.128 1.128h19.344c.624 0 1.128-.504 1.128-1.128V10.32c0-.624-.505-1.128-1.105-1.128zm-15.6 3.36a.292.292 0 01-.288.288h-.6a.292.292 0 01-.287-.288v-.6c0-.168.144-.312.287-.312h.6c.168 0 .288.144.288.312v.6zm2.377 0a.292.292 0 01-.288.288h-.6a.292.292 0 01-.288-.288v-.6c0-.168.145-.312.288-.312h.6c.168 0 .288.144.288.312v.6zm10.823 0a.292.292 0 01-.287.288h-4.248a.292.292 0 01-.288-.288v-.6c0-.168.144-.312.288-.312h4.224c.168 0 .288.144.288.312v.6h.023zM22.007 16.512H2.64c-.625 0-1.128.505-1.128 1.128v3.744c0 .625.504 1.128 1.128 1.128h19.344c.624 0 1.128-.504 1.128-1.128V17.64c0-.624-.505-1.128-1.105-1.128zm-15.6 3.36a.292.292 0 01-.288.288h-.6a.292.292 0 01-.287-.288v-.6c0-.168.144-.312.287-.312h.6c.168 0 .288.144.288.312v.6zm2.377 0a.292.292 0 01-.288.288h-.6a.292.292 0 01-.288-.288v-.6c0-.168.145-.312.288-.312h.6c.168 0 .288.144.288.312v.6zm10.823 0a.292.292 0 01-.287.288h-4.248a.292.292 0 01-.288-.288v-.6c0-.168.144-.312.288-.312h4.224c.168 0 .288.144.288.312v.6h.023zM22.007 1.872H2.64c-.625 0-1.128.505-1.128 1.128v3.744c0 .625.504 1.128 1.128 1.128h19.344c.624 0 1.128-.504 1.128-1.128V3c0-.624-.505-1.128-1.105-1.128zm-15.6 3.36a.292.292 0 01-.288.288h-.6a.292.292 0 01-.287-.288v-.6c0-.168.144-.312.287-.312h.6c.168 0 .288.144.288.312v.6zm2.377 0a.292.292 0 01-.288.288h-.6a.292.292 0 01-.288-.288v-.6c0-.168.145-.312.288-.312h.6c.168 0 .288.144.288.312v.6zm10.823 0a.292.292 0 01-.287.288h-4.248a.292.292 0 01-.288-.288v-.6c0-.168.144-.312.288-.312h4.224c.168 0 .288.144.288.312v.6h.023z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Self-hosting options</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" clipPath="url(#clip0)">
                                                <path
                                                    d="M24 15.653a2.61 2.61 0 01-2.61 2.61 2.582 2.582 0 01-2.075-1.044H17.74v6.784H0V17.22h2.62a2.582 2.582 0 002.075 1.044 2.61 2.61 0 10-2.075-4.175H0V6.263h6.785V4.688A2.582 2.582 0 015.74 2.613a2.61 2.61 0 114.175 2.075v1.575h7.825v7.825h1.575A2.606 2.606 0 0124 15.653z"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <path fill="#fff" d="M0 0h24v24H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                    <span>Plugins library</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" clipPath="url(#clip0)">
                                                <path
                                                    d="M19.5 16.922V7.5C19.5 5.25 17.25 3 15 3h-1.5V0L9 4.5 13.5 9V6H15c.75 0 1.5.75 1.5 1.5v9.422A2.985 2.985 0 0015 19.5c0 1.664 1.336 3 3 3s3-1.336 3-3c0-1.102-.61-2.063-1.5-2.578zM18 21c-.82 0-1.5-.68-1.5-1.5S17.18 18 18 18s1.5.68 1.5 1.5S18.82 21 18 21zM6 1.5a2.99 2.99 0 00-3 3c0 1.102.61 2.063 1.5 2.578v9.82A2.985 2.985 0 003 19.477c0 1.663 1.336 3 3 3s3-1.337 3-3c0-1.102-.61-2.063-1.5-2.579v-9.82A2.985 2.985 0 009 4.5c0-1.664-1.336-3-3-3zM6 21c-.82 0-1.5-.68-1.5-1.5S5.18 18 6 18s1.5.68 1.5 1.5S6.82 21 6 21zM6 6c-.82 0-1.5-.68-1.5-1.5S5.18 3 6 3s1.5.68 1.5 1.5S6.82 6 6 6z"
                                                    fill="#fff"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <path fill="#fff" d="M0 0h24v24H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </figure>
                                    <span>Open source</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M22.488 14.568l-5.304 2.352a.478.478 0 00-.265.264l-2.352 5.305c-.24.528-1.056.36-1.272-.265L8.735 9.48c-.191-.504.216-.936.745-.744l12.745 4.56c.623.24.791 1.056.263 1.272zM6.768 7.512L3.505 4.248c-.144-.168-.097-.456.096-.648.192-.192.48-.24.647-.096L7.513 6.77c.144.144.12.432-.096.648-.216.191-.48.239-.648.095zM7.535 12.048l-3.263 3.264c-.144.145-.432.12-.648-.095-.216-.216-.24-.48-.096-.648l3.265-3.265c.144-.144.432-.12.648.096.214.216.239.48.094.648zM6.216 9.936H1.585c-.216 0-.385-.24-.385-.505 0-.264.168-.504.385-.504h4.607c.216 0 .385.24.385.504-.001.265-.169.505-.361.505zM8.856 6.192V1.585c0-.216.24-.385.505-.385.264 0 .504.168.504.385v4.607c0 .216-.24.385-.504.385-.265-.001-.505-.169-.505-.385zM11.281 6.745l3.265-3.265c.144-.144.432-.12.648.096.192.192.24.48.095.648l-3.288 3.264c-.144.144-.432.12-.647-.096-.193-.216-.24-.48-.073-.647z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Event autocapture</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M7.536 11.496V16.2a.8.8 0 00.792.792h7.368a.8.8 0 00.792-.792v-4.704c0-.313-.192-.576-.455-.72a7.158 7.158 0 00-.865-.336V8.736a3.114 3.114 0 00-3.12-3.12 3.114 3.114 0 00-3.12 3.12v1.704c-.312.096-.6.216-.864.336a.763.763 0 00-.528.72zm3.145-2.76c0-.745.6-1.32 1.32-1.32.744 0 1.32.6 1.32 1.32v1.272a9.905 9.905 0 00-2.665 0V8.736h.025zm-.793 4.296a.71.71 0 01.985 0l.575.576 1.68-1.68a.71.71 0 01.985 0 .71.71 0 010 .984l-2.16 2.16a.69.69 0 01-.505.216.736.736 0 01-.504-.216l-1.08-1.08c-.239-.24-.239-.672.024-.96zM10.896 2.592c.072.072.12.192.095.288l-.168.672a.283.283 0 00.433.312l.575-.36a.358.358 0 01.313 0l.575.36c.216.145.505-.072.432-.312l-.143-.672a.275.275 0 01.096-.288l.528-.432c.192-.168.096-.504-.168-.504l-.672-.048c-.12 0-.215-.072-.24-.168l-.264-.624c-.096-.24-.432-.24-.552 0l-.265.624c-.047.096-.144.168-.24.168l-.672.048a.286.286 0 00-.168.504l.505.432zM5.664 4.295l.673.12c.12.025.192.096.215.216l.192.648c.073.24.408.288.528.048l.336-.6c.048-.096.144-.145.264-.145l.672.025c.265 0 .408-.313.216-.505L8.328 3.6c-.072-.072-.096-.192-.072-.288l.215-.648c.096-.24-.168-.48-.408-.36l-.624.288c-.096.048-.216.024-.312-.024l-.503-.408a.295.295 0 00-.48.264l.096.672c.024.12-.024.216-.12.288l-.552.385c-.216.143-.144.479.096.526zM2.568 7.176a.295.295 0 01.024.312l-.288.624c-.12.24.12.48.36.408l.648-.216c.096-.048.216 0 .288.072l.504.456c.193.168.505.048.505-.216l-.025-.672c0-.12.048-.215.145-.264l.6-.336c.24-.12.192-.455-.048-.528l-.648-.192a.325.325 0 01-.215-.215l-.12-.673c-.048-.264-.385-.335-.528-.12l-.385.553c-.072.095-.167.144-.287.12l-.673-.096a.295.295 0 00-.264.48l.407.503zM2.592 13.104c.073-.072.193-.12.288-.095l.672.168a.283.283 0 00.313-.433l-.36-.575a.358.358 0 010-.312l.36-.576c.144-.216-.073-.504-.313-.432l-.672.168a.275.275 0 01-.288-.096l-.432-.553c-.168-.192-.504-.096-.504.168l-.048.672c0 .12-.072.216-.168.24l-.624.264c-.24.096-.24.432 0 .552l.624.265c.096.048.168.144.168.24l.048.672c.024.264.335.36.504.168l.432-.505zM5.328 16.704l-.6-.335c-.096-.048-.144-.145-.144-.265l.024-.672c0-.264-.312-.408-.504-.215l-.504.455a.317.317 0 01-.288.072l-.648-.215c-.24-.096-.48.168-.36.408l.288.624c.048.096.025.216-.024.312l-.408.503c-.168.215.024.504.264.48l.673-.096c.12-.024.215.024.287.12l.385.552c.144.216.48.145.528-.12l.12-.672a.254.254 0 01.215-.216l.648-.192c.24-.072.288-.408.048-.528zM8.567 19.416l-.672.024c-.12 0-.215-.048-.264-.145l-.336-.6c-.12-.24-.455-.192-.528.048l-.192.648a.325.325 0 01-.215.216l-.673.12c-.264.047-.335.384-.12.527l.553.385c.095.072.144.168.12.288l-.096.672a.295.295 0 00.48.264l.552-.407a.295.295 0 01.312-.025l.625.288c.24.12.48-.12.408-.36l-.216-.648c-.048-.095 0-.215.072-.288l.456-.504c.142-.215-.001-.527-.266-.503zM13.105 21.408c-.072-.072-.12-.192-.096-.288l.168-.672a.283.283 0 00-.432-.312l-.575.36a.358.358 0 01-.313 0l-.575-.36c-.216-.145-.505.072-.432.312l.167.672a.275.275 0 01-.095.288l-.553.432c-.193.168-.096.504.167.504l.673.048c.12 0 .215.072.24.168l.264.624c.096.24.432.24.552 0l.264-.624c.048-.096.145-.168.24-.168l.673-.048a.286.286 0 00.168-.504l-.505-.432zM18.335 19.704l-.672-.12a.283.283 0 01-.215-.215l-.216-.649c-.072-.24-.408-.288-.528-.048l-.335.6c-.048.096-.145.145-.265.145l-.672-.025c-.264 0-.408.313-.216.505l.456.504c.072.072.096.192.072.288l-.216.648c-.095.24.168.48.408.36l.625-.288c.095-.048.215-.024.312.024l.552.408c.216.168.505 0 .48-.264l-.145-.673c-.025-.12.024-.215.12-.287l.552-.385c.216-.144.143-.48-.097-.527zM21.433 16.824a.295.295 0 01-.025-.312l.288-.624c.12-.24-.12-.48-.36-.408l-.648.216c-.095.047-.215 0-.288-.072l-.504-.456c-.192-.168-.505-.048-.505.216l.025.672c0 .12-.048.215-.145.264l-.6.336c-.24.12-.192.455.048.527l.648.193c.096.024.192.12.216.215l.12.672c.048.265.384.336.528.12l.384-.552c.072-.095.168-.144.288-.12l.672.096a.295.295 0 00.264-.48l-.406-.503zM23.208 11.736l-.624-.265c-.096-.048-.168-.144-.168-.24l-.048-.672a.287.287 0 00-.504-.168l-.432.528c-.073.072-.193.12-.288.096l-.672-.168a.283.283 0 00-.313.432l.36.576a.358.358 0 010 .312l-.36.575c-.144.216.073.505.313.433l.672-.168a.275.275 0 01.288.095l.432.528c.168.192.504.096.504-.168l.048-.672c0-.12.072-.215.168-.24l.624-.264c.265-.118.265-.454 0-.55zM18.672 7.295l.6.336c.095.048.144.144.144.264l-.024.673c0 .264.312.407.504.215l.504-.455c.073-.073.193-.096.288-.073l.648.216c.24.096.48-.168.36-.408l-.288-.624c-.048-.096-.024-.216.024-.312l.408-.553c.168-.215-.024-.504-.264-.48l-.672.146c-.12.024-.216-.025-.288-.12l-.384-.552c-.145-.216-.48-.145-.528.12l-.12.672a.254.254 0 01-.216.215l-.649.193c-.24.072-.288.407-.047.527zM15.432 4.584l.672-.024c.12 0 .216.048.264.144l.336.6c.12.24.456.193.528-.047l.192-.648a.325.325 0 01.216-.216l.672-.12c.264-.048.335-.384.12-.528l-.552-.384c-.096-.072-.145-.168-.12-.288l.095-.672a.295.295 0 00-.48-.264l-.552.407a.295.295 0 01-.312.025l-.624-.288c-.24-.12-.48.12-.408.36l.215.648c.048.095 0 .215-.072.288l-.456.504c-.142.215.001.527.266.503z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Compliance-friendly</span>
                                </li>
                                <li>
                                    <figure>
                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity=".5" fill="#fff">
                                                <path d="M18.25 7.142L14.437 3.33 12.92 1.811c-.245-.245-.485-.504-.74-.74-.005-.002-.008-.008-.011-.012a.237.237 0 00-.33 0l-.605.605c-.486.483-.968.968-1.451 1.451L6.507 6.39c-.246.246-.504.486-.74.74l-.012.015c-.142.142-.037.403.167.403l3.594-.001v5.869c0 .126.099.225.227.225h4.517a.224.224 0 00.227-.225V7.547h3.61a.2.2 0 00.194-.14.215.215 0 00-.042-.265zM21.727 17.467a3.602 3.602 0 00-2.934-1.554l-.823-.002H6.232l-.989.002c-.998 0-1.964.405-2.644 1.142-.88.956-1.183 2.358-.74 3.586.436 1.204 1.517 2.133 2.792 2.323.356.053.712.047 1.07.047H18.8l.014-.002a3.594 3.594 0 003.115-1.883 3.552 3.552 0 00-.2-3.659zm-6.694 2.277c-.001.01-.009.023-.009.037 0 .014-.01.028-.014.042-.01.029-.019.057-.03.085-.005.01-.002.02-.008.03l.005.002c-.023.002-.007.004-.01.007 0 .002-.004.005-.007.01-.002.004-.007.009-.01.016a.505.505 0 01-.037.068l-.014.023c-.004.008-.009.014-.014.02l-.028.043c-.005.005-.007.011-.011.017-.008.01-.011.017-.019.026-.005.008-.011.014-.017.02a.21.21 0 01-.017.024c-.291.353-.807.481-1.245.34-.087-.046-.17-.07-.244-.117l-.03-.02c-.024-.017-.047-.047-.07-.047-.005-.008-.012-.011-.017-.017-.017-.017-.033-.03-.047-.045-.002 0-.002-.002-.005-.005a1.175 1.175 0 01-.338-.617l-.001-.018-.008-.043-.007-.044c-.002-.012-.002-.024-.002-.036l-.002-.033-.002-.023V19.436c.023-.525.396-1.005.926-1.101a1.14 1.14 0 01.414-.002l.029.004a.91.91 0 01.084.02c.01.001.019.004.028.007a.363.363 0 01.054.018c.01.002.018.008.026.01.01.002.019.007.026.01l.027.01a.864.864 0 01.076.038c.01.005.017.01.027.014.009.005.016.01.026.014.017.01.033.019.049.03l.02.014.008.005c.007.005.011.01.018.014 0 0 .002 0 .002.002.014.011.028.02.043.033.009.007.016.014.026.02.007.008.014.011.019.019.014.011.028.026.042.04l.023.023c.008.007.014.017.02.023.008.008.015.017.021.026.008.008.012.014.02.024.001.002.001.005.004.007l.019.024c.007.01.014.018.018.026.012.019.027.038.038.056.005.01.01.017.017.026.004.01.01.017.014.027l.014.026a.33.33 0 00.014.026l.014.03c0 .002.002.002.002.005.01.023.019.047.028.073h-.004c.002.008.005.011.008.019l.007.019.002.009.005.019v.01a.042.042 0 01.01.01c.001.002.001.005.004.008.005.01.005.019.005.028v.019l.001.01.002.008.008.029c.026.151.02.31-.014.46 0 .003 0 .006-.002.008v.002c-.007.004-.007.007-.01.009zm4.1.466a1.157 1.157 0 01-1.249.343 1.168 1.168 0 01-.773-1.06V19.44c.023-.525.396-1.005.926-1.102.472-.084.952.117 1.205.53.257.418.204.965-.109 1.343z" />
                                            </g>
                                        </svg>
                                    </figure>
                                    <span>Export to data warehouse</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

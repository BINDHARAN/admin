// eslint-disable-next-line
import React from 'react'
import DisplayDashboardData from './DisplayDashboardData'
import ProjectProgress from './ProjectProgress'
import ColorSystem from './ColorSystem'

function AdminDashboard() {
    const datas = [
        {
            Earnings: "Earnings (Monthly)",
            value: "$40,000",
            symbol: "fas fa-calendar",
            bar: 0,
            color: "primary"
        },
        {
            Earnings: "Earnings (Annual)",
            value: "$215,000",
            symbol: "fas fa-dollar-sign",
            bar: 0,
            color: "success"
        },
        {
            Earnings: "Tasks",
            value: "50%",
            symbol: "fas fa-clipboard-list",
            bar: 1,
            color: "info"
        },
        {
            Earnings: "Pending Requests",
            value: "18",
            symbol: "fas fa-comments",
            bar: 0,
            color: "warning"
        }
    ]

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <span className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i>
                    Generate Report
                </span>
            </div>

            <div className="row">
                {
                    datas.map((data, index) => {
                        return <DisplayDashboardData key={index} data={data} />
                    })
                }
            </div>
            <div className="row">

                {/* <!-- Area Chart --> */}
                <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <div className="chart-area">
                                <canvas id="myAreaChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pie Chart --> */}
                <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                            <div className="dropdown no-arrow">
                                <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                    aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-header">Dropdown Header:</div>
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card Body --> */}
                        <div className="card-body">
                            <div className="chart-pie pt-4 pb-2">
                                <canvas id="myPieChart"></canvas>
                            </div>
                            <div className="mt-4 text-center small">
                                <span className="mr-2">
                                    <i className="fas fa-circle text-primary"></i> Direct
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-success"></i> Social
                                </span>
                                <span className="mr-2">
                                    <i className="fas fa-circle text-info"></i> Referral
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <ProjectProgress />
                </div>
                <div className="col-lg-6 mb-4">
                    {/* <div className="row"> */}
                    <ColorSystem />
                    {/* </div> */}
                </div>
            </div>

        </>
    )
}

export default AdminDashboard
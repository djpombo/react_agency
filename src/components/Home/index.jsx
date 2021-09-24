import '../css/styles.css';
import { FaBuffer, FaBolt, FaCartPlus, FaChartLine, FaChessPawn, FaCloud } from 'react-icons/fa';

const Home = () => {

    return (
        <>
            <main className="services-container">
                <h2>O que fazemos</h2>
                <div className="services-card-container">
                    <div className="services-card">
                        <i className="fas fa-buffer"><FaBuffer /></i>
                        <h3>Desenvolvimento Full-Stack</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam commodi animi vero voluptates. Aliquid cumque fugit
                            tempora enim laborum corrupti commodi! Aspernatur culpa et
                            nostrum distinctio praesentium, delectus dolor laborum.</p>
                    </div>
                    <div className="services-card">
                        <i className="fas fa-bolt"><FaBolt /></i>
                        <h3>Sites leves e rápidos</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam commodi animi vero voluptates. Aliquid cumque fugit
                            tempora enim laborum corrupti commodi! Aspernatur culpa et
                            nostrum distinctio praesentium, delectus dolor laborum.</p>
                    </div>
                    <div className="services-card">
                        <i className="fas fa-cart-plus"><FaCartPlus  /></i>
                        <h3>E-Commerce</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam commodi animi vero voluptates. Aliquid cumque fugit
                            tempora enim laborum corrupti commodi! Aspernatur culpa et
                            nostrum distinctio praesentium, delectus dolor laborum.</p>
                    </div>
                    <div className="services-card">
                        <i className="fas fa-chart-line" ><FaChartLine /></i>
                        <h3>SEO</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam commodi animi vero voluptates. Aliquid cumque fugit
                            tempora enim laborum corrupti commodi! Aspernatur culpa et
                            nostrum distinctio praesentium, delectus dolor laborum.</p>
                    </div>
                    <div className="services-card">
                        <i className="fas fa-chess-pawn"><FaChessPawn /></i>
                        <h3>Estratégias de marketing</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam commodi animi vero voluptates. Aliquid cumque fugit
                            tempora enim laborum corrupti commodi! Aspernatur culpa et
                            nostrum distinctio praesentium, delectus dolor laborum.</p>
                    </div>

                    <div className="services-card">
                        <i className="fas fa-cloud"><FaCloud /></i>
                        <h3>Hospedagem AWS/Azure</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam commodi animi vero voluptates. Aliquid cumque fugit
                            tempora enim laborum corrupti commodi! Aspernatur culpa et
                            nostrum distinctio praesentium, delectus dolor laborum.</p>
                    </div>
                </div>
                <a href="#" className="btn btn-primary btn-rounded">Veja todos os serviços</a>
            </main>
            <div className="jobs-container">
                <h2>Alguns de nossos trabalhos</h2>
                <div className="jobs-list">
                    <div className="first-job" id="job1">
                        <div className="job-card-cover">
                            <p className="job-card-title">Projeto 1</p>
                            <p className="job-card-description">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In nisi, asperiores officia corrupti nemo quod a fugit
                                delectus non quis molestias labore eum consectetur ducimus ex maxime
                                voluptates sunt reprehenderit.</p>
                        </div>
                    </div>
                    <div className="outher-jobs-container">
                        <div className="job-card" id="job2">
                        <div className="job-card-cover">
                            <p className="job-card-title">Projeto 2</p>
                            <p className="job-card-description">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In nisi, asperiores officia corrupti nemo quod a fugit
                                delectus non quis molestias labore eum consectetur ducimus ex maxime
                                voluptates sunt reprehenderit.</p>
                        </div>
                        </div>

                        <div className="job-card" id="job3">
                        <div className="job-card-cover">
                            <p className="job-card-title">Projeto 3</p>
                            <p className="job-card-description">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In nisi, asperiores officia corrupti nemo quod a fugit
                                delectus non quis molestias labore eum consectetur ducimus ex maxime
                                voluptates sunt reprehenderit.</p>
                        </div>
                        </div>

                        <div className="job-card" id="job4">
                        <div className="job-card-cover">
                            <p className="job-card-title">Projeto 4</p>
                            <p className="job-card-description">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In nisi, asperiores officia corrupti nemo quod a fugit
                                delectus non quis molestias labore eum consectetur ducimus ex maxime
                                voluptates sunt reprehenderit.</p>
                        </div>
                        </div>

                        <div className="job-card" id="job5">
                        <div className="job-card-cover">
                            <p className="job-card-title">Projeto 5</p>
                            <p className="job-card-description">Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In nisi, asperiores officia corrupti nemo quod a fugit
                                delectus non quis molestias labore eum consectetur ducimus ex maxime
                                voluptates sunt reprehenderit.</p>
                        </div>
                        </div>
                                 
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
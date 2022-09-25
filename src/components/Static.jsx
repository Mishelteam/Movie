import React from 'react';
import './Static.css'
import { ProgressBar } from 'react-bootstrap';

const Static = () => {
    return (
        <div className='container-fluid'>
            <div className="row my-5">
                <div className="col-12 d-flex ps-5">
                    <h2 className='mx-2'>
                        Leaderboard
                    </h2>
                    <div className='mx-2'>
                        <p className='d-flex align-items-center'><span className='myS'></span> <p className='m-0'>All Time Edits</p></p>
                        <p className='d-flex align-items-center'><span className='myS1'></span> <p className='m-0'>Edits This Week</p></p>
                    </div>
                </div>
                <div className="col-6">
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.gravatar.com/avatar/304911bb0eb9db71377515970feb5b82.jpg?s=64" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black tegP'>rsgmovie</p>
                            <ProgressBar className='progg bir' variant='success' now={10} /> <span> 31,929  </span>
                            <ProgressBar className='progg' variant='success' now={90} /> <span> 5,554 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>simonsmad</p>
                            <ProgressBar className='progg bir' variant='success' now={10} /> <span> 31,929  </span>
                            <ProgressBar className='progg' variant='success' now={90} /> <span> 5,554 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.themoviedb.org/t/p/w64_and_h64_face/obiT8TIgRKKinc5Q5QhKLg8UzH6.jpg" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>qualitylover</p>
                            <ProgressBar className='progg bir' variant='success' now={55} /> <span> 31,929  </span>
                            <ProgressBar className='progg' variant='success' now={72} /> <span> 5,554 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.gravatar.com/avatar/304911bb0eb9db71377515970feb5b82.jpg?s=64" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>khaRumaihi</p>
                            <ProgressBar className='progg bir' variant='success' now={15} /> <span> 31,929  </span>
                            <ProgressBar className='progg' variant='success' now={75} /> <span> 5,554 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.themoviedb.org/t/p/w64_and_h64_face/obiT8TIgRKKinc5Q5QhKLg8UzH6.jpg" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>heli5m</p>
                            <ProgressBar className='progg bir' variant='success' now={78} /> <span> 409,172</span>
                            <ProgressBar className='progg' variant='success' now={82} /> <span> 5,554 </span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.themoviedb.org/t/p/w64_and_h64_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>raze464</p>
                            <ProgressBar className='progg bir' variant='success' now={50} /> <span> 356,112 </span>
                            <ProgressBar className='progg' variant='success' now={92} /> <span> 5,554 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.themoviedb.org/t/p/w64_and_h64_face/obiT8TIgRKKinc5Q5QhKLg8UzH6.jpg" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>talestalker</p>
                            <ProgressBar className='progg bir' variant='success' now={90} /> <span> 756,848  </span>
                            <ProgressBar className='progg' variant='success' now={77} /> <span> 3,631 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.themoviedb.org/t/p/w64_and_h64_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>pingu51</p>
                            <ProgressBar className='progg bir' variant='success' now={65} /> <span> 319,717  </span>
                            <ProgressBar className='progg' variant='success' now={77} /> <span> 3,450 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>blackisle</p>
                            <ProgressBar className='progg bir' variant='success' now={17} /> <span> 72,941  </span>
                            <ProgressBar className='progg' variant='success' now={72} /> <span> 3,129 </span>
                        </div>
                    </div>
                    <div className='row w-75  d-flex align-items-center'>
                        <div className="col-4">
                            <img className='rounded-circle' src="https://www.themoviedb.org/t/p/w64_and_h64_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt="" />
                        </div>
                        <div className='col-8'>
                            <p className='text-start text-black fs-bold tegP'>Liberte45000</p>
                            <ProgressBar className='progg bir' variant='success' now={17} /> <span> 71,667  </span>
                            <ProgressBar className='progg' variant='success' now={68} /> <span> 3,011 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Static;

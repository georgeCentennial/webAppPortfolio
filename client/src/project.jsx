/**
 * File name: project.jsx
 * Student name: George Jose J. Cayabyab
 * Student ID: 301481867
 * Date: Jan 28, 2025
 */
import summary from './images/summary.png';
import blindDogClassDiagram from './images/blindDogClassDiagram.png';
import blindDogOutput from './images/blindDogOutput.png';

export default function Project(){
    return (
        <>
            <div className="container">
                <h1>My Projects</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">Blind Dog</div>
                            <div class="panel-body">
                                <img src={blindDogOutput} width={200} height={200}/>
                                <p>Agent in park environment. Stops running if there are no more food in the park environment. Continuously moving while there is food.</p>
                                <p>I modified some of the code.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">Blind Dog Class diagram</div>
                            <div class="panel-body">
                                <img src={blindDogClassDiagram} width={200} height={200}/>
                                <p>Class diagram describing Blind Dog.</p>
                                <p>I created this diagram from scratch.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="panel panel-default">
                            <div class="panel-heading">Don't quit social media</div>
                            <div class="panel-body">
                                <img src={summary} width={200} height={200}/>
                                <p>Summary and reverse outline of an article about social media.</p>
                                <p>I wrote this for comm171.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </>
    );
}
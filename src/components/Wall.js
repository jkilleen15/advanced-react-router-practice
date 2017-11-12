import React from "react";

function Wall() {
  return (
      <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Wall</h3>
                            </div>
                            <div className="panel-body">
                                <div id="settings">This is the wall</div>
                                <img src={'https://t4.ftcdn.net/jpg/01/12/71/71/240_F_112717146_SqGfFN1CEnZ6aHP4eDaP5zGTDKjNWmPp.jpg'} alt="chart image" />
                            </div>
                        </div>
                    </div>
                </div>
             );
}

export default Wall;

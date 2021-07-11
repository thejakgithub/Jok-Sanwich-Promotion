import React from 'react';
import './CustomerList.css';

export default function CustomerList({ theCus, onAdd, onDelete, onFree, onClear }) {
    return (
        <div >
            <div className="row">
                <div className="col-12 ">{theCus.name}</div>

            </div>
            <div className="row">
                <div className="col-4 col-md-2">
                    <div className="input-group mb-3">
                        <button onClick={() => onAdd(theCus.id)} className="btn btn-outline-secondary btn-block " type="button" id="button-addon1">+</button>
                        <input type="text" className="form-control text-center px-1" value={theCus.count} aria-describedby="button-addon1" readOnly />
                        <button onClick={() => onDelete(theCus.id)} className="btn btn-outline-secondary btn-block" type="button" id="button-addon1">-</button>
                    </div>
                </div>
                <div className="col-3 col-md-2">
                    <label className="text-center label-form pt-2 ">ฟรี {theCus.free} ชิ้น</label>
                </div>
                <div className="col-5 col-md-2 ">
                    <button onClick={() => onFree(theCus.id)} className="btn btn-outline-success  me-1 me-md-2" type="button">แถม</button>
                    <button onClick={() => onClear(theCus.id)} className="btn btn-outline-danger  " type="button">ล้าง</button>
                </div>
            </div>
            <hr className="border border-primary"/>
        </div>
    )
}

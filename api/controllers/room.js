import Room from "../models/Room.js"

export const createRoom = async (req,res,next)=>{
    const newRoom = new Room(req.body)
    
    try{
        const savedRoom = await newRoom.save()
        res.status(200).json(savedRoom)
    }catch(err){
        next(err)
    }
}


//Update room
export const updateRoom = async (req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new:true })
        res.status(200).json(updatedRoom)
    }catch(err){
        res.status(500).json(err)
    }
}



//Delete room
export const deleteRoom = async (req,res,next)=>{
    try{
        await Room.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Room has been deleted.");
    }catch(err){
        res.status(500).json(err)
    }
}


//Get room
export const getRoom = async (req,res,next)=>{
    try{
        const room = await Room.findById(
            req.params.id
            );
        res.status(200).json(room)
    }catch(err){
        res.status(500).json(err)
    }
}



//Get all rooms
export const getRooms = async (req,res,next)=>{
   
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms)
    }catch(err){
      next(err)
    }
}
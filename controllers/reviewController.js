import Review from "../models/review.js";

export function addReview(req,res){
    if (req.user == null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return;
    }


const data = req.body;

data.name = req.user.firstName + " " + req.user.lastName;
data.email = req.user.email;
data.profilePicture = req.user.profilePicture;

const newReview = new Review(data);

newReview.save().then(()=>{
    res.json({message : "Review added successfully"})
}).catch(()=>{
    res.status(500).json({error : "Review addition failed"})
});

}

export function getReviews(req,res){

    const user = req.user

    if(user == null || user.role != "admin"){
        Review.find({isAppreoved : true}).then((reviews)=>{req.json(reviews);
        })
        return
    }

    if (user.role == "admin"){
        Review.find().then((reviews)=>{req.jason(reviews);
        })
    }
}

export function deleteReview(req,res){

    const email = req.params.email;

    if(req.user == null){res.status(401).json({message : "Please login and try again"})}

    if(req.user.role == "ädmin"){Review.deleteOne
        ({email:email}).then(()=>{
        res.json({message : "Review deleted successfully"})
        }).catch(()=>{
        res.status(500).json({error : "Review deletion failed"});
       });
       return
    }else

        if(req.user.role == "customer")
            if(req.user.email == email){Review.deleteOne
            ({email:email}).then(()=>{
            res.json({message : "Review deleted successfully"})
            }).catch(()=>{
            res.status(500).json({error : "Review deletion failed"});
            });
            }else{
                res.status(403).json({ message: "You are not authorized to perform this action" })
            }

    
}

export function approveReview(req,res){

    if(req.user == null){
        res.status(401).json({message: "Please login and try again"});
    return
    }

    if(req.user.role == "admin"){
        Review.updateOne (
            {
                email: email
            },
            {
                isApproved: true
            }
    ).then(()=>{
        res.json({message: "Review approved successfully"});
    }).catch(()=>{
        res.status(500).json({message: "Review approval failed"});
    })
    }else{
        res.status(403).json({message: "You are not an admin, only admin can approve reviews."});
    }
}
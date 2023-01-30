import { Prisma } from "@prisma/client"
import prisma from "../src/database/database"

async function main (){
 await prisma.movies.createMany({
    data:{
        "name":"KnivesOut",        
        "platform":"Netflix",   
        "genre":"Detective",     
        "status":"watched",      
        "notes":"great",      
        "ageRatingId":3,
        "trailerId":1,   
    }
 })
}
 
 main()
    .then(() => {
        console.log("Successful Registration");
    })
    .catch( e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
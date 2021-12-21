var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Samfamilybook.jpg", "Petdogfamilybook.jpg" , "Candy.jpg", "mom.jpg", "dad.jpg"];
var names = ["Fmaily Book","Sam Atro", "Oreo", "Dasha Atro", "Alena Atro", "Marc Atro"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    var updatedImage = images[i];
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

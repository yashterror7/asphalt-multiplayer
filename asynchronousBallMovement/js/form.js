class Form {
   constructor  (){
   }
   display(){
       var title = createElement("h2");
       title.html ("ultimate racer for pros");
       title.position (350,200);
       
       var input = createInput("your nickname");
       var button = createButton("confirm");
       input.position (300,280);
       button.position (300,350);
     
       var greeting = createElement("h3");
       button.mousePressed(function(){
          input.hide();
          button.hide();
          var name = input.value();
           playercount = playercount + 1;
          player.update(name);
          player.updatecount(playercount);
          greeting.html("hiya " + name);
          greeting.position(300,200);
       })
   }
}

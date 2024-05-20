// file handling

const fileInput = document.getElementById('screenshot');
const imagePreview = document.getElementById('imagePreview');
const markdownContent = `ऑनलाइन स्टोर पेज के स्क्रीनशॉट की समीक्षा करने पर, मैंने जो पहचाना है वह डार्क पैटर्न से संबंधित हो सकता है:

1. **नकली तात्कालिकता और कमी**: इसमें प्रमुख छूट प्रतिशत दिखाए गए हैं (50%, 66% और 60% छूट), जो उपयोगकर्ता के लिए जल्दी से खरीदारी करने की तात्कालिकता की भावना पैदा कर सकता है। हालाँकि, उलटी गिनती घड़ी या स्टॉक नंबर के बिना, यह निर्णायक नहीं है कि यह एक भ्रामक अभ्यास है।

2. **भ्रामक उत्पाद जानकारी**: उत्पादों को महत्वपूर्ण छूट के साथ विज्ञापित किया जाता है। यदि ये छूट वास्तविक नहीं हैं (उदाहरण के लिए, यदि मूल कीमतें बढ़ी हुई हैं), तो इसे भ्रामक माना जा सकता है। वास्तविक उत्पाद की गुणवत्ता और विशेषताओं को केवल स्क्रीनशॉट से सत्यापित नहीं किया जा सकता है।

3. **सदस्यता चालबाजी**: इस स्क्रीनशॉट से सदस्यता चालबाजी का कोई तत्काल सबूत नहीं है, जैसे कि पूर्व-चेक किए गए बॉक्स या छिपे हुए रद्दीकरण विकल्प।

4. **उपयोगकर्ता इंटरफ़ेस धोखा**: उपयोगकर्ताओं को विज्ञापनों पर क्लिक करने के लिए धोखा देने के लिए डिज़ाइन किए गए किसी भी भ्रमित करने वाले बटन या लेआउट के बिना लेआउट सीधा लगता है। हालाँकि, 'क्विक व्यू' बटन संभावित रूप से किसी विज्ञापन या किसी अन्य प्रकार की अपसेलिंग का कारण बन सकता है, लेकिन इंटरफ़ेस के साथ इंटरैक्ट किए बिना यह स्पष्ट नहीं है।

5. **गोपनीयता का उल्लंघन**: गोपनीयता से संबंधित कोई दृश्य सेटिंग या विकल्प नहीं हैं, इसलिए अकेले इस छवि से यह निर्धारित करना संभव नहीं है कि डेटा संग्रह या साझाकरण से बाहर निकलने में कोई जटिलता है या नहीं।

6. **जबरन खाता निर्माण**: इस स्क्रीनशॉट में ऐसा कोई सबूत नहीं है जो इंगित करता हो कि उपयोगकर्ताओं को बुनियादी सुविधाओं तक पहुंचने या खरीदारी पूरी करने के लिए एक खाता बनाने के लिए मजबूर किया जाता है।

7. **सीमित उपयोगकर्ता विकल्प**: स्क्रीनशॉट उपयोगकर्ताओं को दिए जा रहे किसी भी सीमित विकल्प को नहीं दिखाता है जो उन्हें अधिक महंगे या ऑटो-नवीनीकरण विकल्पों की ओर ले जाता है।

8. **छिपी हुई लागत**: छवि चेकआउट प्रक्रिया के बारे में जानकारी प्रदान नहीं करती है, इसलिए कोई भी अतिरिक्त शुल्क या लागत जो चेकआउट के अंतिम चरण में ही सामने आ सकती है, उसका आकलन इस छवि से नहीं किया जा सकता है।

9. **उपयोगकर्ता समीक्षाओं में गहरे पैटर्न**: समीक्षा प्रणाली में कोई हेरफेर हुआ है या नहीं, इसका आकलन करने के लिए स्क्रीनशॉट में कोई उपयोगकर्ता समीक्षाएँ दिखाई नहीं दे रही हैं।

10. **डेटा पारदर्शिता अनुपालन**: उपयोगकर्ता डेटा का उपयोग और गोपनीयता नीति नहीं दिखाई जाती है, इसलिए इस छवि से अनुपालन निर्धारित नहीं किया जा सकता है।
        `.replace(/\*\*(.*?)\*\*/g, "$1");
fileInput.addEventListener('change', function() {

  if (this.files && this.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '20%';
      img.style.maxHeight = '10%';   
      imagePreview.innerHTML = '';
      imagePreview.appendChild(img);  
      img.addEventListener('mouseover', function() {
        img.classList.add('image-hover');
      });   
      img.addEventListener('mouseout', function() {
        img.classList.remove('image-hover');
      });
    };
    reader.readAsDataURL(this.files[0]);
  }
});

// URL HANDLING
const getDark = document.getElementById("btn");
getDark.addEventListener('click', function(event){

    event.preventDefault(); 
    // var websiteLink = document.getElementById("website_link").value;
    // var screenshot = document.getElementById("screenshot").files[0];
    // console.log("screenshot data..", screenshot);
    // requestFunction(websiteLink);
    document.getElementById('content1').innerHTML = marked.parse(markdownContent);
    // if(websiteLink){
    //   requestFunction(websiteLink);
    // }
    // else if(screenshot){
    //   requestImage(screenshot);
    // }
    // else{
    //   return error;
    // }
     
})

const requestText = async (websiteLink) =>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("websitelink string...",websiteLink);
    var raw = JSON.stringify({
    "website": `${websiteLink}`
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const p = await fetch("https://amazebot.azurewebsites.net/getinfo/website", requestOptions)

    let response = await p.json();
    return response;

}

const requestImageProcess = async (screenshot) =>{
  
  const formData = new FormData();
  formData.append('screenshot',screenshot);

  var requestOptions = {
    method: 'POST',
    // headers: myHeaders,
    body: formData,
    redirect: 'follow'
    };
    console.log("sending image request");
    const p = await fetch("https://amazebot.azurewebsites.net/getinfo/image", requestOptions)
    console.log("got image request", p);
    let response = await p.json();
    return response;

}

const requestFunction= async (websiteLink)=>{

    try {
     
        // let res = await requestText(websiteLink);
        const markdownContent = ```Upon reviewing the screenshot of the online store page, here's what I have identified that could be related to dark patterns:

        1. **Fake Urgency and Scarcity**: There are prominent discount percentages shown (50%, 66%, and 60% off), which can create a sense of urgency for the user to make a purchase quickly. However, without a countdown timer or stock number, it's not conclusive that this is a deceptive practice.
        
        2. **Misleading Product Information**: The products are advertised with significant discounts. If these discounts are not genuine (for example, if the original prices are inflated), it could be considered misleading. The actual product quality and features are not verifiable from the screenshot alone.
        
        3. **Subscription Trickery**: There is no immediate evidence of subscription trickery, such as pre-checked boxes or hidden cancellation options, from this screenshot.
        
        4. **User Interface Deception**: The layout seems straightforward without any confusing buttons or layouts designed to trick users into clicking ads. However, the 'Quick View' button could potentially lead to an ad or another form of upselling, but this is not clear without interacting with the interface.
        
        5. **Privacy Intrusion**: There are no visible settings or options related to privacy, so it's not possible to determine from this image alone if there's any complexity in opting out of data collection or sharing.
        
        6. **Forced Account Creation**: There's no evidence in this screenshot that indicates users are forced to create an account to access basic features or complete a purchase.
        
        7. **Limited User Choice**: The screenshot does not show any limited options being offered to users that steer them towards more expensive or auto-renewing options.
        
        8. **Hidden Costs**: The image does not provide information about the checkout process, so any additional fees or costs that may be revealed only at the final stage of checkout cannot be assessed from this image.
        
        9. **Dark Patterns in User Reviews**: There are no user reviews visible in the screenshot to assess if there is any manipulation of the review system.
        
        10. **Data Transparency Compliance**: The use of user data and the privacy policy are not shown, so compliance cannot be determined from this image.
        ```;
        // if(res && res.message){
        //     markdownContent = res.message;
        // }else{
        //     throw new Error('Invalid response format or missing text data');
        // }
        
        document.getElementById('content1').innerHTML = marked.parse(markdownContent); // Use `marked()` to parse Markdown content
        // console.log("response:", res);

    } catch (error) {
        console.error("Error:", error);
    }

}

const requestImage = async (screenshot) =>{
  try {
     
    let res = await requestImageProcess(screenshot);
    let markdownContent = "";
    if(res && res.message){
        markdownContent = res.message;
    }else{
        throw new Error('Invalid response format or missing text data');
    }
    
    document.getElementById('content1').innerHTML = marked.parse(markdownContent); // Use `marked()` to parse Markdown content
    console.log("response:", res);

} catch (error) {
    console.error("Error:", error);
}
}





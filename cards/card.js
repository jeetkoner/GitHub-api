// Retrieve data from local storage
const data = localStorage.getItem('responseText');
let NewData;

if (data) {
    NewData = JSON.parse(data);
} else {
    NewData = {};
}

console.log(NewData);



const card = document.querySelector('.card');
const avatar = card.querySelector('.avatar');
const DisplayName = card.querySelector('.name');
const bio = card.querySelector('.bio');
const location = card.querySelector('.location');
const followers = card.querySelector('.followers');
const following = card.querySelector('.following');
const publicRepos = card.querySelector('.public-repos');
const publicGists = card.querySelector('.public-gists');
const createdAt = card.querySelector('.created-at');
const updatedAt = card.querySelector('.updated-at');
const profileLink = card.querySelector('.profile-link');

avatar.src = NewData.avatar_url ? NewData.avatar_url : '';
DisplayName.textContent = NewData.name ? `Name : ${NewData.name}` : '';
bio.textContent = NewData.bio ? `Bio : ${NewData.bio}` : '';
location.textContent = NewData.location ? `Location : ${NewData.location}` : '';
followers.textContent = NewData.followers ? `Followers : ${NewData.followers}` : '';
following.textContent = NewData.following ? `Following : ${NewData.following}` : '';
publicRepos.textContent = NewData.public_repos ? `Public Repositories : ${NewData.public_repos}` : '';
publicGists.textContent = NewData.public_gists ? `Public Gists : ${NewData.public_gists}` : '';
// Modify the createdAt.textContent line to format the date as desired
createdAt.textContent = NewData.created_at ? `Created At : ${new Date(NewData.created_at).toLocaleString('en-US', { month: 'long', year: 'numeric' })}` : '';
updatedAt.textContent = NewData.updated_at ? `Last Updated At : ${new Date(NewData.updated_at).toLocaleString('en-US', { month: 'long', year: 'numeric' })}` : '';;
profileLink.href = NewData.html_url ? NewData.html_url : '';
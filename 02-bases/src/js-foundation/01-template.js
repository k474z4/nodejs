const emailTemplate = `
<div>
<h1>Hi, {{name}}</h1>
<p>Thank you for your order.</p>
</div>
`;

//Cuando exportamos le estamos dando acceso a otro archivo para que utilice las funcionalidades que este posee
module.exports = {
    emailTemplate
}
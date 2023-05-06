const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I click tags', async function() {
    let element = await this.driver.$('#ember38');
    return await element.click();
})

When('I click newTag', async function() {
    let element = await this.driver.$('a[href="#/tags/new/"]');
    return await element.click();
})

When('I enter tagname {kraken-string}', async function (tagname1) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagname1);
})

When('I enter tagdescription {kraken-string}', async function (tagdescription) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(tagdescription);
})

When('I click savetag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]');
    return await element.click();
})

When('I click pruebaCreacion', async function() {
    let element = await this.driver.$('h3.gh-tag-list-name=Prueba creación tag');
    return await element.click();
})

When('I enter tagnameeditado {kraken-string}', async function (tagnameeditado1) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(tagnameeditado1);
})

When('I click pagina', async function() {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
})

When('I click nuevapagina', async function() {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
})

When('I enter titulopagina {kraken-string}', async function (titulopagina1) {
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.setValue(titulopagina1);
})

When('I click eliminartag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]');
    return await element.click();
})

When('I click confirmareliminaciontag', async function() {
    let element = await this.driver.$('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]');
    return await element.click();
})
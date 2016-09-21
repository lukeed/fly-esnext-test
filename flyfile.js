export default async function () {
  await this.start('lint');
  await this.source('src/*.js').target('dist');
}

export async function lint() {
  await this.source('src/*.js').target('dist');
}

import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | smoke test', function(hooks) {
  setupApplicationTest(hooks);

  test('it displays the app layout', async function(assert) {
    await visit('/');

    assert.dom('[data-test-ember-paper-layout-title]').exists();
    assert.dom('[data-test-sidenav-content]').exists();
    assert.dom('[data-test-toolbar-content]').exists();
    assert.dom('[data-test-outlet]').exists();
  });
});

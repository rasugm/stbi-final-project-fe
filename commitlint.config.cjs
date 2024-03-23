module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            'feat', // New feature
            'fix', // Bug fix
            'hotfix', // Bug fix
            'chore', // Maintenance, no production code change
            'docs', // Documentation change
            'style', // Code style changes (e.g., formatting)
            'refactor', // Code refactoring
            'perf', // Performance improvement
            'test', // Adding or modifying tests
        ]],
        'scope-empty': [2, 'never'],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-full-stop': [2, 'never', '.'],
        'subject-case': [2, 'always', 'lower-case'],
        'footer-empty': [0, 'always'],
        'footer-max-line-length': [2, 'always', 100],
    },
};
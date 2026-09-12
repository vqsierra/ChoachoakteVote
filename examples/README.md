# Example configs

`chks_example.json` is a curated set of 85 CHKS concepts (age/grade through
substance access) hand-selected and edited for plain-language youth voting,
consolidated from the full CHKS secondary-data codebook catalog (see
`chks_full_feature_reference.csv` in this directory for the fuller
reference these were drawn from). It also demonstrates the config's
expected JSON shape (`id`, `label`, optional `description`).

A CSV version of the same shape works too:

```csv
id,label,description
sleep_quality,Sleep quality,Self-reported sleep quality in the past 30 days
mood,Mood / depressive symptoms,Frequency of low mood in the past 30 days
```
